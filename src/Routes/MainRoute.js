import React from "react";
import { Route, Switch } from "react-router-dom";
import Loadable from "react-loadable";

const Loading = () => <div>Loading Pak Boss!!!</div>;

const Home = Loadable({
  loader: () => import(/* webpackChunkName: "home"*/ "../Pages/Home"),
  loading: () => <Loading />
});

const Ujian = Loadable({
    loader: () => import(/* webpackChunkName: "home"*/ "../Pages/Ujian"),
    loading: () => <Loading />
});

const HalamanEdit = Loadable({
    loader: () => import(/* webpackChunkName: "home"*/ "../Pages/HalamanEdit"),
    loading: () => <Loading />
});

// const NotMatch = Loadable({
//     loader: () => import(/* webpackChunkName: "404"*/ "../Pages/NotMatch"),
//     loading: () => <Loading />
// });


const MainRoute = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/ujian" component={Ujian} />
      <Route exact path="/edit" component={HalamanEdit} />
      {/* <Route component={NotMatch} /> */}
    </Switch>
  );
};
export default MainRoute;
