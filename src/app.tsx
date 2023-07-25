import React from "react";
import { Route, Switch } from "react-router-dom";
import { AdminPage } from "./pages/admin-page";
import { HomePage } from "./pages/home-page";
import { NotFoundPage } from "./pages/not-found-page";
import { ProfilePage } from "./pages/profile-page";
import { ProtectedPage } from "./pages/protected-page";
import { PublicPage } from "./pages/public-page";

export const App: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={HomePage} />
      <Route path="/profile" component={ProfilePage} />
      <Route path="/public" component={PublicPage} />
      <Route path="/protected" component={ProtectedPage} />
      <Route path="/admin" component={AdminPage} />
      <Route path="*" component={NotFoundPage} />
    </Switch>
  );
};
