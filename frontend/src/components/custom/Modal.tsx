interface ModalProps {
  id: string;
  backdropLabel: string;
  toggleClass: string;
  headingText: string;
  size?: "sm" | "md" | "lg" | "xl";
  component?: React.ReactNode;
  contentText?: string;
  isOpen?: boolean;
  onSave?: () => void;
  saveButtonName?: string;
}
function Modal(props: ModalProps) {
  return (
    <>
      <div
        className={`${props.toggleClass} fade`}
        id={props.id}
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex={-1}
        aria-labelledby={props.backdropLabel}
        aria-hidden="true"
      >
        <div
          className={`modal-dialog modal-dialog-centered ${
            props.size ? `modal-${props.size}` : `md`
          }`}
        >
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id={props.backdropLabel}>
                {props.headingText}
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss={`${props.toggleClass}`}
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              {props.contentText && props.contentText}
              {props.component && props.component}
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn-theme-outlined"
                data-bs-dismiss={`${props.toggleClass}`}
              >
                Close
              </button>
              {props.onSave && (
                <button
                  type="button"
                  className="btn-theme"
                  onClick={props.onSave}
                >
                  {props.saveButtonName || "Save"}
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Modal;
