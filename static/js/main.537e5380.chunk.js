(this["webpackJsonpreviews-slider-app-v2"]=this["webpackJsonpreviews-slider-app-v2"]||[]).push([[0],{48:function(e,t,a){},54:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a(16),r=a.n(i),s=a(74),o=a(36),c=Object(o.a)({overrides:{MuiCardMedia:{root:{height:0,paddingTop:"56%"}},MuiButtonGroup:{contained:{position:"absolute",bottom:"10px"}},MuiAvatar:{root:{height:"90px",width:"90px"}}},typography:{fontFamily:"'Montserrat', sans-serif"},palette:{primary:{light:"#ff784e",main:"#ff5722",dark:"#b23c17",contrastText:"#fff"},secondary:{light:"#ffa733",main:"#ff9100",dark:"#b26500",contrastText:"#000"}}}),l=(a(48),a(18)),d=a(11),p=a(20),u=a(19),m=a(72),h=a(73),j=a(70),b=[{id:1,image:"https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959131/person-2_ipcjws.jpg",name:"maria ferguson",title:"office manager",quote:"Fingerstache umami squid, kinfolk subway tile selvage tumblr man braid viral kombucha gentrify fanny pack raclette pok pok mustache."},{id:2,image:"https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",name:"john doe",title:"regular guy",quote:"Gastropub sustainable tousled prism occupy. Viral XOXO roof party brunch actually, chambray listicle microdosing put a bird on it paleo subway tile squid umami."},{id:3,image:"https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959121/person-1_aufeoq.jpg",name:"peter smith",title:"product designer",quote:"Drinking vinegar polaroid street art echo park, actually semiotics next level butcher master cleanse hammock flexitarian ethical paleo."},{id:4,image:"https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",name:"susan andersen",title:"the boss",quote:"Marfa af yr 3 wolf moon kogi, readymade distillery asymmetrical seitan kale chips fingerstache cloud bread mustache twee messenger bag. "}],x=a(76),f=a(77),g=a(4),v=function(e){Object(p.a)(a,e);var t=Object(u.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(d.a)(a,[{key:"render",value:function(){var e=this.props.person,t=e.image,a=e.name,n=e.title,i=e.quote,r=this.props,s=r.slideIndex,o=r.personIndex,c=r.people,l="nextSlide";return o===s&&(l="activeSlide"),(o===s-1||0===s&&o===c.length-1)&&(l="lastSlide"),Object(g.jsxs)("article",{className:l,"data-test":"slider-person-container",children:[Object(g.jsx)(x.a,{display:"flex",justifyContent:"center",alignItems:"center",children:Object(g.jsx)(f.a,{alt:a,src:t})}),Object(g.jsx)(j.a,{align:"center",children:a}),Object(g.jsx)(j.a,{align:"center",variant:"button",display:"block",color:"secondary",gutterBottom:!0,children:n}),Object(g.jsx)(j.a,{align:"center",ariant:"body2",gutterBottom:!0,children:i})]})}}]),a}(n.Component),y=a(71),O=a(57),k=function(e){Object(p.a)(a,e);var t=Object(u.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(d.a)(a,[{key:"render",value:function(){return Object(g.jsxs)(y.a,{color:"primary",variant:"contained","data-test":"slider-button-container",children:[Object(g.jsx)(O.a,{onClick:this.props.prevSlide,"data-test":"prev-button",children:"Prev"}),Object(g.jsx)(O.a,{onClick:this.props.nextSlide,"data-test":"next-button",children:"next"})]})}}]),a}(n.Component),I=function(e){Object(p.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).lastSlide=function(){var e=n.state.people.length-1;n.state.slideIndex<0&&n.setState({slideIndex:e}),n.state.slideIndex>e&&n.setState({slideIndex:0})},n.prevSlide=function(){n.setState({slideIndex:n.state.slideIndex-1})},n.nextSlide=function(){n.setState({slideIndex:n.state.slideIndex+1})},n.state={people:b,slideIndex:0},n}return Object(d.a)(a,[{key:"componentDidUpdate",value:function(){this.lastSlide()}},{key:"componentDidMount",value:function(){var e=this,t=setInterval((function(){e.setState({slideIndex:e.state.slideIndex+1})}),3e3);return function(){return clearInterval(t)}}},{key:"render",value:function(){var e=this;return Object(g.jsxs)(m.a,{maxWidth:"lg","data-test":"component-app",children:[Object(g.jsx)(h.a,{container:!0,spacing:4,justifyContent:"center",children:Object(g.jsx)(h.a,{item:!0,xs:12,sm:6,md:4,children:Object(g.jsxs)(j.a,{"data-test":"review-title",component:"h4",variant:"h4",align:"center",color:"primary",gutterBottom:!0,children:[Object(g.jsx)("span",{children:"/ "}),"Reviews"]})})}),Object(g.jsxs)("div",{className:"section-center",children:[this.state.people.map((function(t,a){return Object(g.jsx)(v,{"data-test":"slider-person-component",person:t,personIndex:a,slideIndex:e.state.slideIndex,people:e.state.people},t.id)})),Object(g.jsx)(k,{"data-test":"slider-button-component",slideIndex:this.state.slideIndex,prevSlide:this.prevSlide,nextSlide:this.nextSlide})]})]})}}]),a}(n.Component);r.a.render(Object(g.jsx)(s.a,{theme:c,children:Object(g.jsx)(I,{})}),document.getElementById("root"))}},[[54,1,2]]]);
//# sourceMappingURL=main.537e5380.chunk.js.map