import { source } from 'common-tags';
import { createSelector } from '@reduxjs/toolkit';

import { State } from '../reducers';
import {
  AceResizeKey,
  Backtrace,
  Edition,
  Orientation,
  Preview,
  PrimaryActionAuto,
  PrimaryActionCore,
  Version,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  VersionInfo,
} from '../types';

export const codeSelector = (state: State) => state.code;
export const positionSelector = (state: State) => state.position;
export const selectionSelector = (state: State) => state.selection;

const HAS_TESTS_RE = /^\s*#\s*\[\s*test\s*([^"]*)]/m;
export const hasTestsSelector = createSelector(codeSelector, code => !!code.match(HAS_TESTS_RE));

const HAS_MAIN_FUNCTION_RE =
  /^\s*(public\s+)?\s*(static\s+)?\s*\s*void\s+main\s*(\(\s*\)|\(String\s*\[\]\s*[a-z|A-Z|0-9]+\))/m;
export const hasMainFunctionSelector = createSelector(codeSelector, code => !!code.match(HAS_MAIN_FUNCTION_RE));

const CRATE_TYPE_RE = /^\s*#!\s*\[\s*crate_type\s*=\s*"([^"]*)"\s*]/m;
export const crateTypeSelector = createSelector(codeSelector, code => (code.match(CRATE_TYPE_RE) || [])[1]);

const autoPrimaryActionSelector = createSelector(
  crateTypeSelector,
  hasTestsSelector,
  hasMainFunctionSelector,
  (crateType, hasTests, hasMainFunction) => {
    if (crateType && crateType !== 'proc-macro') {
      if (crateType === 'bin') {
        return PrimaryActionCore.Execute;
      } else {
        return PrimaryActionCore.Compile;
      }
    } else {
      if (hasMainFunction) {
        return PrimaryActionCore.Execute;
      } else {
        return PrimaryActionCore.Compile;
      }
    }
  },
);

export const getCrateType = createSelector(
  crateTypeSelector,
  autoPrimaryActionSelector,
  (crateType, primaryAction) => {
    if (crateType) {
      return crateType;
    } else if (primaryAction === PrimaryActionCore.Execute) {
      return 'bin';
    } else {
      return 'lib';
    }
  },
);

const rawPrimaryActionSelector = (state: State) => state.configuration.primaryAction;

export const isAutoBuildSelector = createSelector(
  rawPrimaryActionSelector,
  autoPrimaryActionSelector,
  (primaryAction, autoPrimaryAction) => (
    primaryAction === PrimaryActionAuto.Auto && autoPrimaryAction === PrimaryActionCore.Compile
  ),
);

const primaryActionSelector = createSelector(
  rawPrimaryActionSelector,
  autoPrimaryActionSelector,
  (primaryAction, autoPrimaryAction): PrimaryActionCore => (
    primaryAction === PrimaryActionAuto.Auto ? autoPrimaryAction : primaryAction
  ),
);

const LABELS =
{
  compile: 'Compile',
  execute: 'Execute',
}

export const getExecutionLabel = createSelector(primaryActionSelector, primaryAction => LABELS[primaryAction]);

const getJava17 = (state: State) => state.versions?.java17;
const getJava18 = (state: State) => state.versions?.java18;
const getJava19 = (state: State) => state.versions?.java19;
const getJava20 = (state: State) => state.versions?.java20;
const getJava21 = (state: State) => state.versions?.java21;

const versionNumber = (v: Version | undefined) => v ? v.version : '';
export const java17VersionNumber = createSelector(getJava17, versionNumber);
export const java18VersionNumber = createSelector(getJava18, versionNumber);
export const java19VersionNumber = createSelector(getJava19, versionNumber);
export const java20VersionNumber = createSelector(getJava20, versionNumber);
export const java21VersionNumber = createSelector(getJava21, versionNumber);

const versionDetails = (v: Version | undefined) => v ? `${v.date} ${v.hash.slice(0, 20)}` : '';
export const java17VersionText = createSelector(getJava17, versionDetails);
export const java18VersionText = createSelector(getJava18, versionDetails);
export const java19VersionText = createSelector(getJava19, versionDetails);
export const java20VersionText = createSelector(getJava20, versionDetails);
export const java21VersionText = createSelector(getJava21, versionDetails);

const editionSelector = (state: State) => state.configuration.edition;


export const getModeLabel = (state: State) => {
  const { configuration: { mode } } = state;
  return `${mode}`;
};

export const isEditionDefault = createSelector(
  editionSelector,
  edition => edition == Edition.JavaStandardEdition,
);

export const getBacktraceSet = (state: State) => (
  state.configuration.backtrace !== Backtrace.Disabled
);

export const getPreviewSet = (state: State) => (
  state.configuration.preview !== Preview.Disabled
);

export const getAdvancedOptionsSet = createSelector(
  isEditionDefault, getBacktraceSet,
  (editionDefault, backtraceSet) => (
    !editionDefault || backtraceSet
  ),
);

export const hasProperties = (obj: {}) => Object.values(obj).some(val => !!val);

const getOutputs = (state: State) => [
  state.output.execute,
  state.output.format,
  state.output.gist,
];

export const getSomethingToShow = createSelector(
  getOutputs,
  a => a.some(hasProperties),
);

export const baseUrlSelector = (state: State) =>
  state.globalConfiguration.baseUrl;

const gistSelector = (state: State) =>
  state.output.gist;

// Selects url.query of build configs.
const urlQuerySelector = createSelector(
  gistSelector,
  gist => {
    const res = new URLSearchParams();
    if (gist.channel) { res.set('version', gist.channel) }
    if (gist.mode) { res.set('mode', gist.mode) }
    if (gist.edition) { res.set('edition', gist.edition) }
    return res;
  },
);

export const showGistLoaderSelector = createSelector(
  gistSelector,
  gist => gist.requestsInProgress > 0,
);

export const permalinkSelector = createSelector(
  baseUrlSelector, urlQuerySelector, gistSelector,
  (baseUrl, originalQuery, gist) => {
    const u = new URL(baseUrl);
    const query = new URLSearchParams(originalQuery);
    if (gist.id) { query.set('gist', gist.id) }
    u.search = query.toString();
    return u.href;
  },
);

export const textChangedSinceShareSelector = createSelector(
  codeSelector, gistSelector,
  (code, gist) => code !== gist.code
)

const codeBlock = (code: string, language = '') =>
  '```' + language + `\n${code}\n` + '```';

const maybeOutput = (code: string | undefined, whenPresent: (_: string) => void) => {
  if (code && code.length !== 0) { whenPresent(code); }
};

const snippetSelector = createSelector(
  gistSelector, permalinkSelector,
  (gist, permalink) => {
    let snippet = '';

    maybeOutput(gist.code, code => {
      snippet += source`
        ${codeBlock(code, 'rust')}

        ([Playground](${permalink}))
      `;
    });

    maybeOutput(gist.stdout, stdout => {
      snippet += '\n\n';
      snippet +=
        source`
          Output:

          ${codeBlock(stdout)}
        `;
    });

    maybeOutput(gist.stderr, stderr => {
      snippet += '\n\n';
      snippet +=
        source`
          Errors:

          ${codeBlock(stderr)}
        `;
    });

    return snippet;
  },
);

export const urloUrlSelector = createSelector(
  snippetSelector,
  snippet => {
    const newUsersPostUrl = new URL('https://users.rust-lang.org/new-topic');
    newUsersPostUrl.searchParams.set('body', snippet);
    return newUsersPostUrl.href;
  },
);

export const codeUrlSelector = createSelector(
  baseUrlSelector, urlQuerySelector, gistSelector,
  (baseUrl, originalQuery, gist) => {
    const u = new URL(baseUrl);
    const query = new URLSearchParams(originalQuery);
    if (gist.code) { query.set('code', gist.code) }
    u.search = new URLSearchParams(query).toString();
    return u.href;
  },
);

const notificationsSelector = (state: State) => state.notifications;

const NOW = new Date();

const RUST_SURVEY_2022_END = new Date('2022-12-19T00:00:00Z');
const RUST_SURVEY_2022_OPEN = NOW <= RUST_SURVEY_2022_END;
export const showRustSurvey2022Selector = createSelector(
  notificationsSelector,
  notifications => RUST_SURVEY_2022_OPEN && !notifications.seenRustSurvey2022,
);

export const anyNotificationsToShowSelector = createSelector(
  showRustSurvey2022Selector,
  (...allNotifications) => allNotifications.some(n => n),
);

export const clippyRequestSelector = createSelector(
  codeSelector,
  editionSelector,
  getCrateType,
  (code, edition, crateType) => ({ code, edition, crateType }),
);

export const formatRequestSelector = createSelector(
  codeSelector,
  editionSelector,
  (code, edition) => ({ code, edition }),
);

const focus = (state: State) => state.output.meta.focus;
export const isOutputFocused = createSelector(
  focus,
  (focus) => !!focus,
);

const orientationConfig = (state: State) => state.configuration.orientation;
const browserWidthIsSmall = (state: State) => state.browser.isSmall;

export const orientation = createSelector(
  orientationConfig,
  browserWidthIsSmall,
  (orientation, widthIsSmall) => {
    if (orientation == Orientation.Automatic) {
      if (widthIsSmall) { return Orientation.Horizontal } else { return Orientation.Vertical }
    } else {
      return orientation;
    }
  }
)

const ratioGeneration = (state: State) => state.browser.ratioGeneration;

export const aceResizeKey = createSelector(
  focus,
  ratioGeneration,
  (focus, ratioGeneration): AceResizeKey => [focus, ratioGeneration],
)

const aceConfig = (s: State) => s.configuration.ace;
export const aceKeybinding = createSelector(aceConfig, c => c.keybinding);
export const acePairCharacters = createSelector(aceConfig, c => c.pairCharacters);
export const aceTheme = createSelector(aceConfig, c => c.theme);

export const offerCrateAutocompleteOnUse = createSelector(
  editionSelector,
  (edition) => edition !== Edition.JavaStandardEdition,
);

const websocket = (state: State) => state.websocket;

export const websocketFeatureFlagEnabled = createSelector(websocket, (ws) => ws.featureFlagEnabled);

export const useWebsocketSelector = createSelector(
  websocket,
  (ws) => ws.connected && ws.featureFlagEnabled,
);

export type WebSocketStatus =
  { state: 'disconnected' } |
  { state: 'connected' } |
  { state: 'error', error: string };

export const websocketStatusSelector = createSelector(
  websocket,
  (ws): WebSocketStatus => {
    if (ws.error) { return { state: 'error', error: ws.error }; }
    if (ws.connected) { return { state: 'connected' }; }
    return { state: 'disconnected' };
  }
);

export const executeRequestPayloadSelector = createSelector(
  codeSelector,
  (state: State) => state.configuration,
  getBacktraceSet,
  (code, configuration, backtrace) => ({
    version: configuration.version,
    mode: configuration.mode,
    edition: configuration.edition,
    code,
    backtrace,
  }),
);

export const compileRequestPayloadSelector = createSelector(
  codeSelector,
  (state: State) => state.configuration,
  getBacktraceSet,
  (_state: State, { target }: { target: string }) => ({ target }),
  (code, configuration, backtrace, target ) => ({
    version: configuration.version,
    mode: configuration.mode,
    edition: configuration.edition,
    code,
    target,
    backtrace,
  }),
);