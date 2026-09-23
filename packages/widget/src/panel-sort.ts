/**
 * Sort and group-by-page controls for the feedback panel.
 *
 * Provides:
 * - Sort dropdown (newest, oldest, by-type, open-first)
 * - Group by page toggle (collapsible URL sections)
 * - Pure sort/group utility functions
 *
 * Glassmorphism design — glass surfaces, accent gradients,
 * smooth micro-interactions.
 */

import { type FeedbackResponse, type FeedbackType, isClosedStatus, type SitepingIdentity } from "@siteping/core";
import { el, parseSvg, setText } from "./dom-utils.js";
import type { TFunction } from "./i18n/index.js";
import type { ThemeColors } from "./styles/theme.js";

// PLACEHOLDER_TRUNCATED_FOR_TEST