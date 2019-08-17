import React, { useEffect } from "react";
import { observer, inject } from "mobx-react";

import { BaseTemplte } from "components/templates";
import { ChartForm } from "components/organisms";
import { BarChart, LineChart } from "components/molecules/Charts";

interface IHowMany {
  userStore: any;
  messageStore: any;
}

const Howmany: React.FC<IHowMany> = inject("userStore", "messageStore")(
  observer(({ userStore, messageStore }) => {
    useEffect(() => {
      userStore.getUsers();
      messageStore.getAllMessages();
    }, []);
    return (
      <BaseTemplte nav>
        <ChartForm
          ChartComponent={BarChart}
          data={userStore.users}
          title="유저 사용량"
        />
        <ChartForm
          ChartComponent={LineChart}
          data={messageStore.messages}
          title="메세지 사용량"
        />
      </BaseTemplte>
    );
  })
);

export default Howmany;
