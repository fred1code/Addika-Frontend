import React from "react";
import { mount, shallow } from "enzyme";
import ProviderMock from "../../__mocks__/ProviderMock";
import PageTask from "../../pages/PageTask";

describe("<PageTask/>", () => {
  test("Render de pagetask", () => {
    const pageTask = shallow(
      <ProviderMock>
        <PageTask />
      </ProviderMock>
    );
    expect(pageTask.length).toEqual(1);
  });
});
