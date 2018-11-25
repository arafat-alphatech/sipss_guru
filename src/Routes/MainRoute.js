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

const HalamanEditLast = Loadable({
  loader: () => import(/* webpackChunkName: "home"*/ "../Pages/HalamanEditLast"),
  loading: () => <Loading />
});

const TambahUjian = Loadable({
  loader: () => import(/* webpackChunkName: "home"*/ "../Pages/TambahUjian"),
  loading: () => <Loading />
});

const ReviewSoal = Loadable({
  loader: () => import(/* webpackChunkName: "home"*/ "../Pages/ReviewSoal"),
  loading: () => <Loading />
});
const Dashboard = Loadable({
  loader: () => import(/* webpackChunkName: "dashboard"*/ "../Pages/Dashboard"),
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
      <Route exact path="/tambah-ujian" component={TambahUjian} />
      <Route exact path="/review-info-ujian" component={Ujian} />
      <Route exact path="/edit-soal/:id" component={HalamanEdit} />
      <Route exact path="/edit-soal-last" component={HalamanEditLast} />
      <Route exact path="/review" component={ReviewSoal} />
      <Route exact path="/dashboard" component={Dashboard} />
      {/* <Route component={NotMatch} /> */}
    </Switch>
  );
};
export default MainRoute;
