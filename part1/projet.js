console.log('Projet js works!!!');

const datas = [
    {
      "_id": "5b3e3da860e7c6eeb88e3ceb",
      "isActive": true,
      "picture": "http://placehold.it/32x32",
      "name": "ZENTURY",
      "creation": "Sat May 25 1974 16:52:45 GMT+0100 (Central European Standard Time)"
    },
    {
      "_id": "5b3e3da85d52b4482e60904a",
      "isActive": false,
      "picture": "http://placehold.it/32x32",
      "name": "POLARAX",
      "creation": "Mon Jun 27 1988 07:42:07 GMT+0200 (Central European Summer Time)"
    },
    {
      "_id": "5b3e3da830d91c6264ec2371",
      "isActive": true,
      "picture": "http://placehold.it/32x32",
      "name": "BICOL",
      "creation": "Sat Feb 28 2009 15:57:42 GMT+0100 (Central European Standard Time)"
    },
    {
      "_id": "5b3e3da84172d52b597c35ca",
      "isActive": false,
      "picture": "http://placehold.it/32x32",
      "name": "CYTREX",
      "creation": "Tue Oct 06 1970 07:07:42 GMT+0100 (Central European Standard Time)"
    },
    {
      "_id": "5b3e3da8bdabcef689e8f0d4",
      "isActive": false,
      "picture": "http://placehold.it/32x32",
      "name": "PLAYCE",
      "creation": "Sun Aug 29 2010 07:52:18 GMT+0200 (Central European Summer Time)"
    },
    {
      "_id": "5b3e3da8f5132e9b61630c5e",
      "isActive": false,
      "picture": "http://placehold.it/32x32",
      "name": "NETROPIC",
      "creation": "Fri Nov 17 1989 09:10:32 GMT+0100 (Central European Standard Time)"
    },
    {
      "_id": "5b3e3da83cec1f4a3f959388",
      "isActive": false,
      "picture": "http://placehold.it/32x32",
      "name": "UNISURE",
      "creation": "Tue Aug 09 2005 02:26:51 GMT+0200 (Central European Summer Time)"
    },
    {
      "_id": "5b3e3da83319a70043710f9f",
      "isActive": true,
      "picture": "http://placehold.it/32x32",
      "name": "CALCU",
      "creation": "Mon Jan 14 1980 12:08:39 GMT+0100 (Central European Standard Time)"
    },
    {
      "_id": "5b3e3da8dfc260a3993d2e64",
      "isActive": false,
      "picture": "http://placehold.it/32x32",
      "name": "QUADEEBO",
      "creation": "Thu Jan 08 2009 03:25:20 GMT+0100 (Central European Standard Time)"
    },
    {
      "_id": "5b3e3da8a8b5ffda3cf89cc0",
      "isActive": true,
      "picture": "http://placehold.it/32x32",
      "name": "PROXSOFT",
      "creation": "Sun Jan 04 1998 23:19:53 GMT+0100 (Central European Standard Time)"
    },
    {
      "_id": "5b3e3da87d3d148f090316ca",
      "isActive": true,
      "picture": "http://placehold.it/32x32",
      "name": "VERBUS",
      "creation": "Mon Mar 12 1990 07:33:18 GMT+0100 (Central European Standard Time)"
    },
    {
      "_id": "5b3e3da8e734d6f18fd20d99",
      "isActive": false,
      "picture": "http://placehold.it/32x32",
      "name": "FURNITECH",
      "creation": "Fri Jan 15 1971 15:23:19 GMT+0100 (Central European Standard Time)"
    },
    {
      "_id": "5b3e3da84769754f62adcd1e",
      "isActive": true,
      "picture": "http://placehold.it/32x32",
      "name": "ZENTHALL",
      "creation": "Mon Sep 26 1994 07:13:17 GMT+0100 (Central European Standard Time)"
    },
    {
      "_id": "5b3e3da8e0ca663902594537",
      "isActive": false,
      "picture": "http://placehold.it/32x32",
      "name": "BEADZZA",
      "creation": "Sun Dec 07 1975 14:46:01 GMT+0100 (Central European Standard Time)"
    },
    {
      "_id": "5b3e3da88c8a4ff9e7a470af",
      "isActive": true,
      "picture": "http://placehold.it/32x32",
      "name": "ENERSOL",
      "creation": "Fri Oct 28 2016 03:41:22 GMT+0200 (Central European Summer Time)"
    },
    {
      "_id": "5b3e3da8971220d673089795",
      "isActive": true,
      "picture": "http://placehold.it/32x32",
      "name": "ORBIN",
      "creation": "Wed Mar 17 1999 20:59:11 GMT+0100 (Central European Standard Time)"
    },
    {
      "_id": "5b3e3da8b36fc54ea95f52fe",
      "isActive": true,
      "picture": "http://placehold.it/32x32",
      "name": "ANDRYX",
      "creation": "Sat Apr 20 2013 16:19:59 GMT+0200 (Central European Summer Time)"
    },
    {
      "_id": "5b3e3da8387a4b96cd64ac5c",
      "isActive": false,
      "picture": "http://placehold.it/32x32",
      "name": "MARKETOID",
      "creation": "Wed Apr 14 2004 19:06:20 GMT+0200 (Central European Summer Time)"
    },
    {
      "_id": "5b3e3da8524620a282935367",
      "isActive": true,
      "picture": "http://placehold.it/32x32",
      "name": "COMBOGENE",
      "creation": "Thu Apr 02 1998 14:13:33 GMT+0200 (Central European Summer Time)"
    },
    {
      "_id": "5b3e3da8bd1847d4bd46ceb3",
      "isActive": true,
      "picture": "http://placehold.it/32x32",
      "name": "PASTURIA",
      "creation": "Fri Jan 26 1979 22:25:57 GMT+0100 (Central European Standard Time)"
    },
    {
      "_id": "5b3e3da83802b7161e97bcb5",
      "isActive": true,
      "picture": "http://placehold.it/32x32",
      "name": "ECRAZE",
      "creation": "Sun Jul 30 1989 18:07:17 GMT+0200 (Central European Summer Time)"
    },
    {
      "_id": "5b3e3da81b7d9fdc1ac4a598",
      "isActive": false,
      "picture": "http://placehold.it/32x32",
      "name": "KEEG",
      "creation": "Tue Nov 23 1976 03:32:12 GMT+0100 (Central European Standard Time)"
    },
    {
      "_id": "5b3e3da8408a1a197944bb07",
      "isActive": false,
      "picture": "http://placehold.it/32x32",
      "name": "SHOPABOUT",
      "creation": "Sun Jun 24 1990 03:34:24 GMT+0200 (Central European Summer Time)"
    },
    {
      "_id": "5b3e3da855907b132f341230",
      "isActive": true,
      "picture": "http://placehold.it/32x32",
      "name": "ZILLAR",
      "creation": "Mon Oct 10 2016 19:36:16 GMT+0200 (Central European Summer Time)"
    },
    {
      "_id": "5b3e3da8a72b0faaac30690b",
      "isActive": false,
      "picture": "http://placehold.it/32x32",
      "name": "EQUITAX",
      "creation": "Fri Sep 11 1992 06:15:12 GMT+0200 (Central European Summer Time)"
    },
    {
      "_id": "5b3e3da85447219ab25178da",
      "isActive": false,
      "picture": "http://placehold.it/32x32",
      "name": "DIGIPRINT",
      "creation": "Thu Dec 10 1981 23:31:45 GMT+0100 (Central European Standard Time)"
    },
    {
      "_id": "5b3e3da861f2d927949fa8da",
      "isActive": false,
      "picture": "http://placehold.it/32x32",
      "name": "PUSHCART",
      "creation": "Tue Feb 25 1975 21:31:07 GMT+0100 (Central European Standard Time)"
    }
  ]


//-----------------------------

cleanDates(datas);

//----------------------------- JQUERY

$(function(){

  function showDatas(dataTab) {
    $("#datas > tbody").empty();
    for(let i = 0; i < dataTab.length; i++) {
      $('#datas').append(`<tr><td><img src=${dataTab[i].picture}></td>
      <td>${dataTab[i].name}</td>
      <td>${dataTab[i].isActive ? 'OK': 'KO'}</td>
      <td>${dataTab[i].creation}</td></tr>`);
    }
  }

  showDatas(datas);

  $('#searchBar').keyup(function(){
    const toMatch =  $(this).val();
    const matched =  matchedDatas(datas, toMatch);
    showDatas(matched);
  });

  $('#sortByCreation').click(function() {
    sortByDate(datas);
    const toMatch = $('#searchBar').val();
    const matched =  matchedDatas(datas, toMatch);
    showDatas(matched);
  });

});


//----------------------------- FUNCTIONS

function cleanDates(dataTab) {
  for (let i = 0; i < dataTab.length; i++) {
    dataTab[i].creation = new Date(dataTab[i].creation);
  }
}


function matchedDatas(list, toMatch) {
  return list.filter( data => data.name.startsWith(toMatch.toUpperCase()));
}


function sortByDate(list) {
  list.sort(function(a,b){
    return b.creation - a.creation;
  });
}