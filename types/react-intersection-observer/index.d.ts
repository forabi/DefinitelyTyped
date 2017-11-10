// Type definitions for react-intersection-observer 2.0
// Project: https://github.com/thebuilder/react-intersection-observer
// Definitions by: forabi <https://github.com/forabi>,
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

declare module 'react-intersection-observer' {
  import * as React from 'react';

  export type IntersectionObserverProps = {
    /** Children should be either a function or a node */
    children: JSX.Element | null | ((inView: boolean) => JSX.Element | null);

    /**
     * The `HTMLElement` that is used as the viewport for checking visibility of
     * the target.
     * Defaults to the browser viewport if not specified or if `null`.
     */
    root?: HTMLElement;

    /**
     * Unique identifier for the root element - This is used to identify the
     * `IntersectionObserver` instance, so it can be reused.
     * If you defined a root element, without adding an `id`, it will create a new
     * instance for all components.
     */
    rootId?: string;

    /**
     * Margin around the root.
     * Can have values similar to the CSS margin property,
     * e.g. `"10px 20px 30px 40px"` (top, right, bottom, left).
     */
    rootMargin?: string;

    /**
     * Element tag to use for the wrapping component
     * @default `'div'`
     */
    tag?: string;

    /** Number between 0 and 1 indicating the the percentage that should be
     * visible before triggering. Can also be an array of numbers, to create
     * multiple trigger points.
     * @default `0`
     */
    threshold?: number;

    /**
     * Only trigger this method once
     * @default `false`
     */
    triggerOnce?: boolean;

    /** Call this function whenever the in view state changes */
    onChange?(inView: boolean): void;

    /** Use `render` method to only render content when inView */
    render?(): JSX.Element | null;
  };

  export default class IntersectionObserver extends React.Component<
    IntersectionObserverProps,
    {}
  > {}
}
