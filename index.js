let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: new google.maps.LatLng(18.9163163,73.3254668),
    zoom: 8,
  });

  const iconBase =
    "E:/TY BcsCS/project/MAP folder/";
  const icons = {
    evl: {
      icon: iconBase + "locationS.png",
    },
  };
  const evl = [
    {
      placeName :"Tata Charging Station \n Pirojshanagar, Vikhroli, Mumbai, Maharashtra 400079 ",
      position: new google.maps.LatLng(19.09500700017764,72.92622946530932),
      type: "evl",
    },
    {
      placeName :"Tata Charging Station \n Trivedi Bldg, 2 Ansari Road, Vile Parle West, Maharashtra 400056",
      position: new google.maps.LatLng(19.12858736203299,72.8687947139341),
      type: "evl",
    },
    {
      placeName :"Tata Charging Station \n New Link Rd Near Infinity Mall, Adarsh Nagar, Jogeshwari West, Mumbai, Maharashtra 400053",
      position: new google.maps.LatLng(19.143077538230802,72.83240494936608),
      type: "evl",
    },
    {
      placeName :"Electric Vehicle Charging Station \n Gulmarg substation, Anushakti Nagar, Mumbai, Maharashtra 400094",
      position: new google.maps.LatLng(19.045129188178024, 72.9270162451428),
      type: "evl",
    },
    {
      placeName :"Electric Vehicle Charging Station \n WRWQ+48Q, Chhatrapati Shivaji Terminus Area, Fort, Mumbai, Maharashtra 400001",
      position: new google.maps.LatLng(18.95733556598814, 72.83885837725593),
      type: "evl",
    },
    {
      placeName :"BEST Electric Charger for Mahindra e2oPlus \n 2R7C+54W, Municipal Colony, Worli Shivaji Nagar, Worli, Mumbai, Maharashtra 400030",
      position: new google.maps.LatLng(19.028785601160532, 72.82309463759232),
      type: "evl",
    },
    {
      placeName :"Tata Power Charging Station \n Anik Depot, Municipal Kamgar Vasahat, Trombay Indusrial Area, Chembur, Mumbai, Maharashtra 400022",
      position: new google.maps.LatLng(19.049708765665134, 72.87802535623597),
      type: "evl",
    },
    {
      placeName :"Electric Vehicle Charging Station \n 329F+G63, MIDC Industrial Area, Turbhe, Navi Mumbai, Maharashtra 400705",
      position: new google.maps.LatLng(19.072001501064033, 73.02266215270781),
      type: "evl",
    },
    {
      placeName :"Tata Charging Station \n Tata motar fortune, MIDC Industrial Area, Shiravane, Nerul, Navi Mumbai, Maharashtra 400614",
      position: new google.maps.LatLng(19.04138912500203, 73.03070000564774),
      type: "evl",
    },
    {
      placeName :"Electric Vehicle Charging Station \n 466, Thane - Belapur Rd, Shiv Shakti Nagar, Turbhe Store, Turbhe MIDC, Turbhe, Navi Mumbai, Maharashtra 400705",
      position: new google.maps.LatLng(19.08806144754709, 73.01864821276507),
      type: "evl",
    },
    {
      placeName :"Electric Vehicle Charging Station \n 23H7+C9W, Sector 2, Kharghar, Navi Mumbai, Maharashtra 410210",
      position: new google.maps.LatLng(19.034832103339625, 73.06396688394236),
      type: "evl",
    },
    {
      placeName :"Electric Vehicle Charging Station \n Unnamed Road, Maharashtra 410203",
      position: new google.maps.LatLng(18.808731469670185, 73.29845038010242),
      type: "evl",
    },
    {
      placeName :"Electric Vehicle Charging Station \n Varsoli, Lonavla, Maharashtra 410405",
      position: new google.maps.LatLng(18.780046123769992, 73.42757611094464),
      type: "evl",
    },
    {
      placeName :"Electric Vehicle Charging Station \n HQ7H+5PX, Sahyadri Farms, Lalit Estate, Baner, Pune, Maharashtra 411045",
      position: new google.maps.LatLng(18.57016464912135, 73.77752531903614),
      type: "evl",
    },
    {
      placeName :"Kazam Charging Station \n Shop no.D, Sai Heritage Society,, Near Medi Point Hospital, 4, Baner Link Road, near medipoint hospital, Aundh, Pune, Maharashtra 411007",
      position: new google.maps.LatLng(18.573746442311197, 73.79675519250048),
      type: "evl",
    },
    {
      placeName :"Tata Charging Station \n Wable Wasti, Sai Satyam Park, Wagholi, Pune, Maharashtra 412207",
      position: new google.maps.LatLng(18.58122706329737, 73.95918405345935),
      type: "evl",
    },
    {
      placeName :"Electric Vehicle Charging Station \n 8, Nagar Rd, Clover Park, Viman Nagar, Pune, Maharashtra 411014",
      position: new google.maps.LatLng(18.5698418021782, 73.92002240460465),
      type: "evl",
    },
    {
      placeName :"Electric Vehicle Charging Station \n Unnamed Road, Old MIDC, Manik Nagar, Satara, Maharashtra 415004",
      position: new google.maps.LatLng(17.67157038753083, 74.02022458576079),
      type: "evl",
    },
    {
      placeName :"Electric Vehicle Charging Station \n G35H+44C, Jambhgaon, Maharashtra 415519",
      position: new google.maps.LatLng(17.507836449357804, 74.07775616681621),
      type: "evl",
    },
    {
      placeName :"Electric Vehicle Charging Station \n 7R7G+QV2,Ahmedhnagar,Maharashtra 414106",
      position: new google.maps.LatLng(19.264399473813505, 74.82714892036199),
      type: "evl",
    },
    {
      placeName :"Electric Vehicle Charging Station \n Ellora Heritage Resort Rd, Talyachi Wadi, Maharashtra 431102",
      position: new google.maps.LatLng(20.02076935139499, 75.1695291365987),
      type: "evl",
    },
    {
      placeName :"Electric Vehicle Charging Station \n Aurangabad - Ahmednagar - Pune Hwy, Mirzapur, Maharashtra 431133",
      position: new google.maps.LatLng(19.75360689138076, 75.15235731915755),
      type: "evl",
    },
    {
      placeName :"Electric Vehicle Charging Station \n Vasantdada Udyan, Othonial Colony, Miraj, Maharashtra 416410",
      position: new google.maps.LatLng(16.8366907795303, 74.64860341455005),
      type: "evl",
    },
    {
      placeName :"Electric Vehicle Charging Station \n S No 592, H No 4481 Pune Banglore Highway, MIDC, Shiroli, Maharashtra",
      position: new google.maps.LatLng(16.752781342498245, 74.27911442687389),
      type: "evl",
    },
  ];

  // Create markers.
  for (let i = 0; i < evl.length; i++) {
    
    const marker = new google.maps.Marker({
      position: evl[i].position,
      icon: icons[evl[i].type].icon,
      map: map,
    });
    let contentString = '<h3>'+ evl[i].placeName +'</h3>';
    const infowindow = new google.maps.InfoWindow({
      content: contentString,
      maxWidth: 200,
    });    
    marker.addListener("click", () => {
      infowindow.open({
        anchor: marker,
        map,
       shouldFocus: false,
      });
    });
  }
}