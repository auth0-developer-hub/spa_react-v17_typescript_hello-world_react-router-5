import { withAuthenticationRequired } from "@auth0/auth0-react";
import React, { ComponentType } from "react";
import { Route, RouteProps } from "react-router-dom";
import { PageLoader } from "./page-loader";

interface ProtectedRouteProps extends RouteProps {
  component: ComponentType;
}

export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
  component,
  ...args
}) => (
  <Route
    component={withAuthenticationRequired(component, {
      onRedirecting: () => (
        <div className="page-layout">
          <PageLoader />
        </div>
      ),
    })}
    {...args}
  />
);
