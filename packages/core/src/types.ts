import { type AssertEqual, hasOwn, type Prettify, type Serialized } from "./type-utils.js";

// ---------------------------------------------------------------------------
// Config
// ---------------------------------------------------------------------------

/** FAB anchor — bottom-corner placement supported by the widget. */
export type SitepingPosition = "bottom-right" | "bottom-left";

/** Visual theme — `auto` resolves to `light` or `dark` via system preference. */
export type SitepingTheme = "light" | "dark" | "auto";
