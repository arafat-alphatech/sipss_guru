import React from "react";
import { Route, Switch } from "react-router-dom";
import Loadable from "react-loadable";
import '../Styles/loading.css'
import Loading from '../Components/Loading'
import NotMatch from '../Components/NotMatch'

const Home = Loadable({
  loader: () => import(/* webpackChunkName: "home"*/ "../Pages/Home"),
  loading: () => <Loading />
});

const Ujian = Loadable({
  loader: () => import(/* webpackChunkName: "ujian"*/ "../Pages/Ujian"),
  loading: () => <Loading />
});

const HalamanEdit = Loadable({
  loader: () => import(/* webpackChunkName: "edit-soal"*/ "../Pages/HalamanEdit"),
  loading: () => <Loading />
});

const HalamanEditLast = Loadable({
  loader: () =>
    import(/* webpackChunkName: "home"*/ "../Pages/HalamanEditLast"),
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

const TambahSoal = Loadable({
  loader: () => import(/* webpackChunkName: "home"*/ "../Pages/TambahSoal"),
  loading: () => <Loading />
});

const SignIn = Loadable({
  loader: () => import(/* webpackChunkName: "login"*/ "../Pages/SignIn"),
  loading: () => <Loading />
});

const Intro = Loadable({
  loader: () => import(/* webpackChunkName: "intro"*/ "../Pages/Intro"),
  loading: () => <Loading />
});

const Admin = Loadable({
  loader: () => import(/* webpackChunkName: "admin"*/ "../Pages/Admin"),
  loading: () => <Loading />
});

const MainRoute = () => {
  return (
    <Switch>
      <Route exact path="/ujian" component={Home} />
      <Route exact path="/tambah-ujian" component={TambahUjian} />
      <Route exact path="/review-info-ujian" component={Ujian} />
      <Route exact path="/edit-soal/:id" component={HalamanEdit} />
      <Route exact path="/edit-soal-last" component={HalamanEditLast} />
      <Route exact path="/post-soal/:no_soal" component={TambahSoal} />
      <Route exact path="/post-soal/:id_paket_soal/:no_soal" component={TambahSoal} />
      <Route exact path="/review/:id" component={ReviewSoal} />
      <Route exact path="/signin" component={SignIn} />
      <Route exact path="/" component={Intro} />
      <Route exact path="/loading" component={Loading} />
      <Route exact path="/dashboard" component={Dashboard} />
      <Route exact path="/admin" component={Admin} />
      <Route component={NotMatch} />
    </Switch>
  );
};
export default MainRoute;
