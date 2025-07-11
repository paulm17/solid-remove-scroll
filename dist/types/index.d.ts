import { JSX } from 'solid-js';
export type RemoveScrollProps = {
    /** Activate/deactivate the scroll lock */
    enabled?: boolean;
    /** Hide body scrollbar when locked (Solid’s removeScrollBar) */
    hideScrollbar?: boolean;
    /** Add padding/margin to avoid layout shift */
    preventScrollbarShift?: boolean;
    preventScrollbarShiftMode?: 'padding' | 'margin';
    /** Restore scroll position on unlock */
    restoreScrollPosition?: boolean;
    /** Allow pinch‑zoom gestures */
    allowPinchZoom?: boolean;
    /** Disable isolation (Solid’s noIsolation/inert) */
    noIsolation?: boolean;
    className?: string;
    children?: JSX.Element;
} & JSX.HTMLAttributes<HTMLDivElement>;
export declare function RemoveScroll(props: RemoveScrollProps): any;
export declare namespace RemoveScroll {
    var classNames: {
        fullWidth: string;
        zeroRight: string;
        noScrollbars: string;
    };
}
export declare const zeroRightClassName = "right-scroll-bar-position";
export declare const fullWidthClassName = "width-before-scroll-bar";
export declare const noScrollbarsClassName = "with-scroll-bars-hidden";
