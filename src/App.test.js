import App from './App';
import React from 'react';
//import renderer from 'react-test-renderer';
import { mount,render,shallow } from 'enzyme';
import { configure } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import ScoreCard from './components/Scorecard/ScoreCard';
import MyEventHandling from './components/event-handling-demo/MyEventHandling';
import GreetingES6 from './components/functional comps/GreetingES';

configure({adapter:new Adapter()});
test('App renders without any issues',()=>{
  shallow(<App/>);
});

test('App render the text inside it',()=>{
  const wrapper = mount(<App/> );
});

test('two plus two is four',()=>{
  expect(2+2).toBe(4);
});

 test ("check app comes without any issue",()=>{
   shallow(<App/>);
 });

test('App render the Html  content inside it',()=>{
  var wrapper= shallow(<App/>);
  const someContent=<h4>Learn React today</h4>;
  expect(wrapper.contains(someContent)).toEqual(true);
});

test('App has 2 h4 elements',()=>{
  const wrapper= shallow(<App/>);
  const h4ElementsArrLength= wrapper.find('h4').length;
   console.log("No of h4 elements in App is" + h4ElementsArrLength); 
  expect(h4ElementsArrLength).toEqual(2);
});

test('App has a ScoreCard component',()=>{
  const wrapper= mount(<App/>);
  const isScoreCardCompPresent= wrapper.find('ScoreCard').length;
  expect(isScoreCardCompPresent).toEqual(1);
  //expect(isScoreCardCompPresent).to.have.lengthOf(1);
});

test('App has a single ScoreCard component and has content...',()=>{
  const wrapper=render(<ScoreCard/>);
  console.log(wrapper.text().indexOf("player1"));
  expect((wrapper.text()).indexOf(name="player1")!== -1).toEqual(true);
});


test('app render contain element by id in it',()=>{
  var wrapper=mount(<App/>);
  const findid =wrapper.find("#myId");
  expect(findid.contains("Hello")).toEqual(true);
});


test('component has props',(User)=>{
  const wrapper=shallow(<User name="soni" />);
  expect(wrapper.text("soni")).toEqual(false);
  });

  

  test('test case has button',()=>{
    const wrapper= shallow(<MyEventHandling/>);
    wrapper.find('button').simulate('click');
    //console.log("test case "+wrapper.text());
    expect((wrapper.text()).indexOf("25")!==-1).toEqual(false);
 });
 