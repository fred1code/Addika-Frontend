import React from "react";
import { mount } from "enzyme";
import NavBar from "../../components/NavBar";

describe("<NavBar/>", () => {
test('Render del navbar', () =>{
    const navbar = mount(<NavBar/>);
    expect(navbar.length).toEqual(1);
});


});
