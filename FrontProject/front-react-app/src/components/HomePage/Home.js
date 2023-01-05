import { React, useState, useEffect } from "react";
import Head from "../../components/Head/Head";
import Footer from "../../components/Footer/Footer";
import Questions from "./Questions/Questions";
import Statistic from "./Statistics/Statistic";
import Stages from "./VaccinationStages/Stages";
import Help from "./Help/Help";
import * as actions from "../../redux/actions/citizen/citizen";
import { useDispatch, useSelector } from "react-redux";

function Home() {
  const dispatch = useDispatch();
  const count = useSelector((s) => s.statistic);

  useEffect(() => {
    dispatch(actions.statistic());
  }, []);

  if (!count.statisticLoading) {
    console.log(count.action);
  }

  return (
    <>
      <Head />
      <Questions />
      {!count.statisticLoading && !count.errors? (
        <>
          <Statistic
            C1={count.action.countAll.data}
            C2={count.action.count1.data}
            C3={count.action.count2.data}
            loading={count.statisticLoading}
          />
          <Stages />
        </>
      ) : (
        <div> </div>
      )}

      <Help />
      <Footer />
    </>
  );
}

export default Home;
