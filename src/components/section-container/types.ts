import { NavigationHref } from "enum";
import { MutableRefObject } from "react";

export type SectionRefType = Record<NavigationHref, HTMLElement | null>;
export type SectionRefProp = MutableRefObject<SectionRefType>;
