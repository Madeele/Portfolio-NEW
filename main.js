const tl = new TimelineMax({delay:0.3});

const welcome = document.querySelector('.welcoming_text');

const roles = document.querySelector('.roles');

tl.fromTo(welcome,0.5, {marginLeft: -400},{marginLeft: 0}),

tl.fromTo(roles,0.5, {marginRight: -400},{marginRight: 0})