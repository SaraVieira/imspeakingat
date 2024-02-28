import React, { useRef, useEffect, useContext } from "react";
import { CSSTransition as ReactCSSTransition } from "react-transition-group";

const TransitionContext = React.createContext({
  parent: {},
});

function useIsInitialRender() {
  const isInitialRender = useRef(true);
  useEffect(() => {
    isInitialRender.current = false;
  }, []);
  return isInitialRender.current;
}

type Props = {
  show: boolean;
  enter: string;
  enterStart: string;
  enterEnd: string;
  leave: string;
  leaveStart: string;
  leaveEnd: string;
  children: React.ReactNode;
  appear?: boolean;
  unmountOnExit?: boolean;
  tag?: string;
  className?: string;
};

function CSSTransition({
  show,
  enter = "",
  enterStart = "",
  enterEnd = "",
  leave = "",
  leaveStart = "",
  leaveEnd = "",
  appear,
  unmountOnExit,
  tag = "div",
  children,
  ...rest
}: Props) {
  const enterClasses = enter.split(" ").filter((s) => s.length);
  const enterStartClasses = enterStart.split(" ").filter((s) => s.length);
  const enterEndClasses = enterEnd.split(" ").filter((s) => s.length);
  const leaveClasses = leave.split(" ").filter((s) => s.length);
  const leaveStartClasses = leaveStart.split(" ").filter((s) => s.length);
  const leaveEndClasses = leaveEnd.split(" ").filter((s) => s.length);
  const removeFromDom = unmountOnExit;

  function addClasses(node: HTMLElement, classes: string[]) {
    classes.length && node.classList.add(...classes);
  }

  function removeClasses(node: HTMLElement, classes: string[]) {
    classes.length && node.classList.remove(...classes);
  }

  const nodeRef = React.useRef(null);
  const Component: any = tag;

  return (
    <ReactCSSTransition
      appear={appear}
      nodeRef={nodeRef}
      unmountOnExit={removeFromDom}
      in={show}
      addEndListener={(done: any): void => {
        (nodeRef.current as unknown as HTMLElement)?.addEventListener(
          "transitionend",
          done,
          false,
        );
      }}
      onEnter={() => {
        if (!removeFromDom) {
          // @ts-expect-error
          nodeRef.current.style.display = null;
        }
        addClasses(nodeRef.current as unknown as HTMLElement, [
          ...enterClasses,
          ...enterStartClasses,
        ]);
      }}
      onEntering={() => {
        removeClasses(
          nodeRef?.current as unknown as HTMLElement,
          enterStartClasses,
        );
        addClasses(nodeRef?.current as unknown as HTMLElement, enterEndClasses);
      }}
      onEntered={() => {
        removeClasses(nodeRef?.current as unknown as HTMLElement, [
          ...enterEndClasses,
          ...enterClasses,
        ]);
      }}
      onExit={() => {
        addClasses(nodeRef.current as unknown as HTMLElement, [
          ...leaveClasses,
          ...leaveStartClasses,
        ]);
      }}
      onExiting={() => {
        removeClasses(
          nodeRef.current as unknown as HTMLElement,
          leaveStartClasses,
        );
        addClasses(nodeRef.current as unknown as HTMLElement, leaveEndClasses);
      }}
      onExited={() => {
        removeClasses(nodeRef.current as unknown as HTMLElement, [
          ...leaveEndClasses,
          ...leaveClasses,
        ]);
        if (!removeFromDom)
          (nodeRef.current as unknown as HTMLElement).style.display = "none";
      }}
    >
      <Component
        ref={nodeRef}
        {...rest}
        style={{ display: !removeFromDom ? "none" : null }}
      >
        {children}
      </Component>
    </ReactCSSTransition>
  );
}

function Transition({ show, appear, ...rest }: Props) {
  const { parent } = useContext(TransitionContext) as {
    parent: { appear: boolean; isInitialRender: boolean; show: boolean };
  };

  const isInitialRender = useIsInitialRender();
  const isChild = show === undefined;

  if (isChild) {
    return (
      <CSSTransition
        appear={parent.appear || !parent.isInitialRender}
        show={parent.show}
        {...rest}
      />
    );
  }

  return (
    <TransitionContext.Provider
      value={{
        parent: {
          show,
          isInitialRender,
          appear,
        },
      }}
    >
      <CSSTransition appear={appear} show={show} {...rest} />
    </TransitionContext.Provider>
  );
}

export default Transition;
