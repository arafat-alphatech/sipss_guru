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
    import(/* webpackChunkName: "edit-last"*/ "../Pages/HalamanEditLast"),
  loading: () => <Loading />
});

const TambahUjian = Loadable({
  loader: () => import(/* webpackChunkName: "tambah-ujian"*/ "../Pages/TambahUjian"),
  loading: () => <Loading />
});

const ReviewSoal = Loadable({
  loader: () => import(/* webpackChunkName: "review-soal"*/ "../Pages/ReviewSoal"),
  loading: () => <Loading />
});
const Dashboard = Loadable({
  loader: () => import(/* webpackChunkName: "dashboard"*/ "../Pages/Dashboard"),
  loading: () => <Loading />
});

const TambahSoal = Loadable({
  loader: () => import(/* webpackChunkName: "tambah-soal"*/ "../Pages/TambahSoal"),
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

const ProfileGuru = Loadable({
  loader: () => import(/* webpackChunkName: "penempatan-guru"*/ "../Pages/ProfileGuru"),
  loading: () => <Loading />
});

const RekapNilai = Loadable({
  loader: () => import(/* webpackChunkName: "rekap-nilai"*/ "../Pages/RekapNilai"),
  loading: () => <Loading />
});

const ScanLJK = Loadable({
  loader: () => import(/* webpackChunkName: "scan-ljk"*/ "../Pages/ScanLJK"),
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
      <Route exact path="/profile" component={ProfileGuru} />
      <Route exact path="/rekap-nilai" component={RekapNilai} />
      <Route exact path="/scan-ljk" component={ScanLJK} />
      <Route component={NotMatch} />
    </Switch>
  );
};
export default MainRoute;
