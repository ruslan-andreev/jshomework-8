let metaUTF8 = document.createElement('meta');
metaUTF8.setAttribute('charset','UTF-8');

let meta = document.createElement('meta');
meta.setAttribute('http-equiv','X-UA-Compatible');
meta.setAttribute('content','IE=edge');

let title = document.createElement('title');
title.innerHTML = 'JShomework 8';

document.head.appendChild(metaUTF8);
document.head.appendChild(meta);
document.head.appendChild(title);

let style = document.createElement('style');
style.innerHTML = `
    body{
        margin: 0px;
        padding: 0px;
    }
    .conteiner{
        margin: 0px auto;
        max-width: 800px;
        background-color: #ffffff;
    }
    .header{
        text-align: center;
    }
    h1{
        font-family: 'Arvo', serif;
        font-size: 36px;
        margin-top: 130px;
    }
    p{
        font-family: 'Open Sans', sans-serif;
        color: #9FA3A7;
        font-size: 14px;
        margin-top: 25px;
        margin-bottom: 50px;
    }
    .content{
        display:flex;
    }
    .freelancer{
        height: 480px;
        width: 400px;
        text-align: center;
        border: 1px solid #E8E9ED;
    }
    .content__items{
        margin: 0px auto;
        width: 210px;
    }
    .studio{
        height: 480px;
        width: 400px;
        background-color: #8F75BE;
        text-align: center;
    }
    .name__f,.name__s{
        font-family: 'Montserrat', sans-serif;
        font-weight: bold;
        font-size: 12px;
        text-transform: uppercase;
        margin-top: 82px;
    }
    .name__f{
        color: #9FA3A7;
    }
    .name__s{
        color: #FFC80A;
    }
    .slogo__f,.slogo__s{
        margin-top: 30px;
        font-family: 'Arvo', serif;
        font-size: 36px;
    }
    .slogo__s{
        color: #ffffff;
    }
    .text__f,.text__s{
        margin-top: 30px;
        font-family: 'Open Sans', sans-serif;
        font-size: 12px;
    }
    .text__f{
        color: #9FA3A7;
    }
    .text__s{
        color: #ffffff
    }
    a{
        text-decoration: none;
    }
    .button{
        margin-top: 65px;
    }
    .button__f,.button__s{
        font-family: 'Montserrat', sans-serif;
        font-weight: bold;
        font-size: 12px;
        letter-spacing: 2.4px;
        text-transform: uppercase;
        border: 3px solid #FFC80A;
        padding: 18px 23px;
        border-radius: 40px;
    }
    .button__s{
        color: #ffffff;
    }  
`;
document.head.appendChild(style);

let divmaine = document.createElement('div');
divmaine.classList.add('conteiner');
document.body.appendChild(divmaine);

let header = document.createElement('header');
header.classList.add('header');
divmaine.appendChild(header);
let h1 = document.createElement('h1');
h1.innerHTML = 'Choose Your Option';
header.appendChild(h1);
let p = document.createElement('p');
p.innerHTML = 'But I must explain to you how all this mistaken idea of denouncing';
header.appendChild(p);

let divcontent = document.createElement('div');
divcontent.classList.add('content');
divmaine.appendChild(divcontent);

let divfreelancer = document.createElement('div');
divfreelancer.classList.add('freelancer');
divcontent.appendChild(divfreelancer);
let divcontentitems = document.createElement('div');
divcontentitems.classList.add('content__items');
divfreelancer.appendChild(divcontentitems);

let divnamef = document.createElement('div');
divnamef.classList.add('name__f');
divnamef.innerHTML = 'freelancer';
divcontentitems.appendChild(divnamef);
let divslogof = document.createElement('div');
divslogof.classList.add('slogo__f');
divslogof.innerHTML = 'Initially designed to';
divcontentitems.appendChild(divslogof);
let divtextf = document.createElement('div');
divtextf.classList.add('text__f');
divtextf.innerHTML = 'But I must explain to you how all this mistaken idea of denouncing';
divcontentitems.appendChild(divtextf);

let divbutton = document.createElement('div');
divbutton.classList.add('button');
divcontentitems.appendChild(divbutton);
let a = document.createElement('a');
a.classList.add('button__f');
a.innerHTML = 'start here';
divbutton.appendChild(a);



let divstudio = document.createElement('div');
divstudio.classList.add('studio');
divcontent.appendChild(divstudio);
let divcontentitems1 = divcontentitems.cloneNode();
divstudio.appendChild(divcontentitems1);

let divnames = document.createElement('div');
divnames.classList.add('name__s');
divnames.innerHTML = 'studio';
divcontentitems1.appendChild(divnames);
let divslogos = document.createElement('div');
divslogos.classList.add('slogo__s');
divslogos.innerHTML = 'Initially designed to';
divcontentitems1.appendChild(divslogos);
let divtexts = document.createElement('div');
divtexts.classList.add('text__s');
divtexts.innerHTML = 'But I must explain to you how all this mistaken idea of denouncing';
divcontentitems1.appendChild(divtexts);

let divbuttons = divbutton.cloneNode();
divcontentitems1.appendChild(divbuttons);
let a1 = a.cloneNode(true);
a1.classList.add('button__s');
divbuttons.appendChild(a1);