import React from "react";

interface DataDisplayHandlerProps {
  loading: boolean;
  error: Error | null;
  /**
   * Optional custom function to determine if data is considered empty or unavailable.
   * If not provided, the component will render children if loading is false and error is null.
   * If provided, children are rendered only if this function returns true (and no loading/error).
   */
  dataCheck?: () => boolean;
  loadingComponent?: React.ReactNode;
  errorComponent?: (error: Error) => React.ReactNode;
  noDataComponent?: React.ReactNode;
  children: React.ReactNode;
}

const DefaultLoadingComponent: React.FC = () => (
  <div className="text-center text-neutral-500 p-4 flex justify-center items-center">
    <i className="fas fa-spinner fa-spin text-2xl"></i>
  </div>
);

const DefaultErrorComponent: React.FC<{ error: Error }> = ({ error }) => (
  <p className="text-center text-red-500 p-4">
    Error: {error.message || "An unknown error occurred."}
  </p>
);

const DefaultNoDataComponent: React.FC = () => (
  <p className="text-center text-neutral-500 p-4">No data available.</p>
);

const DataDisplayHandler: React.FC<DataDisplayHandlerProps> = ({
  loading,
  error,
  dataCheck,
  loadingComponent,
  errorComponent,
  noDataComponent,
  children,
}) => {
  if (loading) {
    return <>{loadingComponent || <DefaultLoadingComponent />}</>;
  }

  if (error) {
    return (
      <>
        {errorComponent ? (
          errorComponent(error)
        ) : (
          <DefaultErrorComponent error={error} />
        )}
      </>
    );
  }

  if (dataCheck) {
    if (!dataCheck()) {
      return <>{noDataComponent || <DefaultNoDataComponent />}</>;
    }
  }

  return <>{children}</>;
};

export default DataDisplayHandler;
