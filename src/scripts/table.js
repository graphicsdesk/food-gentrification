import data from '../../data/data2.json';
const div = d3.select('.table');
var svg = div.append('svg').append('g');

var dataAm = data.filter(function(d){
    return d.Address.includes("Amsterdam")        
});
var dataBr = data.filter(function(d){
    return d.Address.includes("Broadway")        
});
var dataCo = data.filter(function(d){
    return !d.Address.includes("Broadway")&&!d.Address.includes("Amsterdam")     
});

function tabulate(data, columns,stname) {

    var table = d3.select("body").append("table").attr("class",stname),
        thead = table.append("thead"),
        tbody = table.append("tbody");
    
      // Three function that change the tooltip when user hover / move / leave a cell
      var mouseover = function(d) {
        d3.select(this)
          .style("stroke", "black")
          .style("opacity", 0.8)
      }
      var mouseleave = function(d) {
        d3.select(this)
          .style("stroke", "none")
          .style("opacity", 1)
      }

    
    // Append the header row
    thead.append("tr")
        .selectAll("th")
        .data(columns)
        .enter()
        .append("th")
            .text(function(column) {
                return column;
            });
      
    // Create a row for each object in the data
    var rows = tbody.selectAll("tr")
        .data(data)
        .enter()
        .append("tr")
        .attr("title",function(d) { return d.Address});
        

    // Create a cell in each row for each column
    var cells = rows.selectAll("td")
        .data(function(row) {
            return columns.map(function(column) {
                return {
                    column: column,
                    value: row[column]
                };
            });
        })
        .enter()
        .append("td")
            .text(function(d) { return d.value; })
            .attr("title",function(d) { return d.value;})
            .style("background-color","#D3D3D3")
    
    table.selectAll("td")
    .on("mouseover", mouseover)
    .on("mouseleave", mouseleave);

    return table;
    
    
}
//d3.csv("data.csv",function(data){
function recolor(x) {  
    var t = document.getElementsByTagName("TABLE");
    var tbs = t[x].getElementsByTagName("TBODY");
    var trs = tbs[0].getElementsByTagName("TR");
    var tds = null;
    var dict = {};
    var restaurants = ["Friedman's","Elysian Fields","Subsconscious","Sliced by Harlem Pizza Co.","Appletree Supermarket","Dunkin'","Massawa","Massawa (expansion)","Bar 314","Max Caffe","Dragon Sushi","Dun Huang","Mellow Tea","Max Soha","Nikko Sushi","West Place","1 Columbia Deli","Dinosaur Bar-B-Que","123BSB","Jin Ramen","The Expat","Starbucks","Oasis Jimma Juice Bar","Peking Garden","Joe's Gourmet Health Deli","Trufa Pizzeria","Toast Uptown","The Craftsman","Chapati House","Falafel on Broadway","El Porton","Cap't Loui","Bettolona","La Salle Dumpling Room","Kuro Kuma","Pisticci","Chokolat","Broadway Au Lait","Shake Shack","Pret a Manger","sweetgreen","Lululemon","Starbucks","Mondel Chocolates","Dos Toros","Hex &amp; Co.","Haagen-Dazs","Wu + Nussbaum","Mill Korean Restaurant","Community Food &amp; Juice","Le Monde","Junzi","Milano Market","Sapps","Dig Inn","Oren's Daily Roast","Tom's Restaurant","Tea Magic","Blue Bottle Coffee","Pinkberry","Shaking Crab","The Heights Bar &amp; Grill","Samad's Gourmet","Famous Famiglia","Pressed Juicery","Starbucks","Kung Fu Tea","Five Guys","Chipotle","Panda Express","Mel's Burger Bar","Koronet Pizza","H-Mart","Atlas Kitchen","Gong Cha","Himalayan Curry House","108 Food Dried Hot Pot","Absolute Bagels","Fumo UWS","Koko Wings","Calle Ocho","Mama's TOO!","Silver Moon Bakery","Six Corners Marketplace","Smoke Jazz &amp; Supper Club","Serafina","Serafina","Tap a Keg","Cafe Du Soleil","Plowshares Coffee Roasters","McDonald's","Ben &amp; Jerry's","Malaysia Grill","Jerusalem","Broadway Pizza &amp; Restaurant","Mexican Deli Inc.","Yakitori Sun Chan","Ollie's Noodle Shop &amp; Grille","Aangan","Sal &amp; Carmine Pizza","Shiny Tea","Schatzie Prime Meats","Dunkin'","Cool Fresh Juice Bar","Broadway Restaurant","Broadway Dive","Broadway Bagel","Yu Kitchen","Cheesy Pizza","Flor de Mayo Restaurant","Metro Diner","Noche Mexicana II","Raenu Thai","Mokja","Cafe Roma","Pizza Ranch Deli &amp; Nightlife","Bosino","Arco Cafe","New Kam Lai","Casa Mexicana","Dunkin'","Papa John's Pizza","The Tang","(new) Ranchito","Gersushi","Miss Saigon","Acosta","Mario'si","Grain House","Living Thai","Anār","Makana","Calaveras Corner","Dive 106","Banh","Mama's Pizzeria","Columbia Deli","Awash","Nobody Told Me","Tropical Sensation","Thai Market","Pancho's","Suma","La Piccola Cucina","Taqueria Y Fonda","Zaad","Domino's Pizza","Happy Hot Hunan","Subway","Spice","Amity Hall","109 Gourmet Deli","109 Gourmet Deli","Lion's Head Tavern","Suite","Roti Roll","Elis Wine Bar &amp; Restaurant","Marlow Bistro","1020 Bar","V &amp; T","Hula Poke","Insomnia Cookies","The Hungarian Pastry Shop","Tartina","Symposium","New York Basics","Strokos Gourmet Deli","Hamilton Deli","Arts &amp; Crafts Beer Parlor","Giovanni's Pizza","Miss Mamie's Spoonbread Too","Hunan Chen's Kitchen","Red Hot Hot Pot","Kikoo Sushi","Ortomare","Crepes on Columbus","Freda's","Ranch Deli","Demitasse","Don Ramon","SheShe Pizzeria","The Calaveras","Doaba Deli","Little Gujrat Deli","Coma Bueno","Curry King","Mighty Catch","Saiguette","Bob's Your Uncle","Duke Ellington Gourmet Deli","Pie Pie Pizza","Joe's Deli","Mekong","Empire Garden","Benny's Chao King","King Columbus Gourmet Deli","JuicC","Panini D'Parma","Haakon's Hall","Amsterdam Restaurant and Tapas Lounge","Che Belle Pizza","Panino Sportivo","Ajanta","Cafe Bagutta","Sezz Medi'","Serafina","La Grata","Kitchenette","Saga Sushi","Oaxaca Taqueria","La Salle Deli and Ice Cream","Columbia University Deli &amp; Grocery","Toast","Nacho Tacos","Lyla's Cafe Creperie","Elsa-Bet Cafe","Subway","BTH","Columbia Deli Market","Tamarind Gourmet","Tom's Delicious Pizza","Patrick Ryan's","Panda's Chinese Restaurant","Stop Restaurant &amp; Lounge","China Place ","China Place and Hana","Ollie's","Vine Sushi &amp; Sake","Uni Cafe","M2M","Amir's","Havana Central","Bernheim &amp; Schwartz","Deluxe Luncheonette","II Cibreo","Amigos","e's Bar","Nussbaum &amp; Wu","Vareli","Maoz","Tomo","D'Ag Fresh","Rack &amp; Soul","Legend","Famous Deli","West Way Cafe","The Manchester Diner","Broadway Grocery","Quick &amp; Quality Sandwich","Curry Club","Masala Club","Cascabel Taqueria","Indian Cafe","Mezzogiorno","107 West","The Underground","West End Lounge","East Dumpling House","II Gatto Nero","Meridiana","Lamps Tavern","West End Hall","Max Juice &amp; Salad","KFC","Henry's","Boulevard","Toast","Calcutta Cafe","Amla Indian","Muscle Maker Grill","Juice Generation","Hot &amp; Crusty","Royal Kabab &amp; Curry Indian","SOOKK","Subway","Broadway Gourmet Deli","Xi'an Famous Foods","Picnic","Mama Mexico","Maria Bonita","Mexican Festival","Sura","Lava Kitchen","Tatz","Amster Thai","Warique Peruvian","Buchetta","Buca","Cafe Pizza","Los Paisas Mexican","El Ranchito","Uncle Luoyang","Dunkin'","Coffee Break","929 Restaurant","Curry &amp; Kebab","Agra's Bay Leaf","Maharaja Palace","Empire Corner","NY Brat Factory","R &amp; R Deli and Grocery","The Neighborhood","The Ellington","Amsterdam Tavern","Bar 106","Wai Lee Restaurant","Yasha Ramen","West Side Noodle Co.","La Toulousaine","Blockheads","Jumbo Pizza","Wondee Siam V","El Rey De La Caridad","New Young Fish Market","Village Pour House","Concord Garden","Sip","The Hamilton","Bistro Ten 18","Bengal Cafe","El Ranchero Mexicano","Pita Grill","P&amp;W Sandwich Shop","Columbia Cottage","Artopolis","Camille's","NoCo Bar &amp; Lounge","Shahi Biryani Grill","Biryani Spot &amp; Curry","Chandni Restaurant","Blue Mountain Deli Mini Market","Manhattan Brew &amp; Vine","994 Columbus Deli","Isola","Zanny's Cafe","A Cafe","El Bracero","Amore Pasticceria","Luro Restaurant","The Fat Monk","Golden Garden","Chirping Chicken","Fortago","934 Columbus Gourmet Deli","\"U\" Like Garden","Tum &amp; Yum","Imperial Pizza","Baconery Cafe","Don Carlos","Columbus Restaurant","Capri Restaurant","Elsa Cafe Restaurant","Kennedy Fried Chicken Food Outlet","Roasted Masala","Parkside Gourmet","Lime Leaf","Krik Krak","Island Burgers","Tara Hill Irish Pub","O'Connell's Pub","Empire Szechuan","Che Bella Pizza","Empanada Joe's","New Lam Kai","Casablanca","Kennedy Fried Chicken","Voza Restaurant","Campo","Noche Mexicana","Flat Top","Pan &amp; Plus Bakery","Salsa Pasta &amp; Falafel"];
    var chain = ["nyc chain","non-chain","non-chain","non-chain","non-chain","chain","non-chain","non-chain","non-chain","non-chain","nyc chain","nyc chain","non-chain","non-chain","non-chain","non-chain","non-chain","chain","nyc chain","nyc chain","non-chain","chain","non-chain","chain","non-chain","non-chain","non-chain","non-chain","non-chain","non-chain","non-chain","chain","non-chain","non-chain","non-chain","non-chain","non-chain","non-chain","chain","chain","chain","chain","chain","non-chain","chain","nyc chain","chain","non-chain","non-chain","non-chain","non-chain","nyc chain","nyc chain","nyc chain","chain","non-chain","non-chain","nyc chain","nyc chain","chain","chain","non-chain","non-chain","chain","chain","chain","chain","chain","chain","chain","nyc chain","nyc chain","chain","non-chain","chain","non-chain","non-chain","non-chain","nyc chain","nyc chain","non-chain","nyc chain","non-chain","non-chain","non-chain","chain","chain","non-chain","non-chain","nyc chain","chain","chain","non-chain","non-chain","non-chain","non-chain","non-chain","nyc chain","non-chain","non-chain","non-chain","non-chain","chain","non-chain","non-chain","non-chain","non-chain","non-chain","non-chain","non-chain","non-chain","non-chain","non-chain","nyc chain","non-chain","non-chain","non-chain","non-chain","nyc chain","non-chain","chain","chain","non-chain","non-chain","non-chain","non-chain","non-chain","non-chain","non-chain","non-chain","non-chain","nyc chain","non-chain","nyc chain","non-chain","nyc chain","non-chain","nyc chain","non-chain","non-chain","non-chain","non-chain","non-chain","non-chain","non-chain","non-chain","chain","non-chain","chain","nyc chain","nyc chain","non-chain","non-chain","non-chain","non-chain","non-chain","non-chain","non-chain","non-chain","non-chain","non-chain","chain","non-chain","non-chain","non-chain","non-chain","non-chain","non-chain","nyc chain","non-chain","non-chain","non-chain","non-chain","nyc chain","non-chain","non-chain","non-chain","non-chain","non-chain","non-chain","non-chain","non-chain","non-chain","non-chain","non-chain","non-chain","non-chain","non-chain","non-chain","non-chain","non-chain","non-chain","non-chain","non-chain","non-chain","non-chain","non-chain","non-chain","non-chain","non-chain","non-chain","non-chain","non-chain","non-chain","non-chain","chain","nyc chain","nyc chain","non-chain","non-chain","non-chain","non-chain","non-chain","non-chain","non-chain","non-chain","chain","non-chain","non-chain","non-chain","chain","non-chain","non-chain","unknown","non-chain","unknown","nyc chain","non-chain","non-chain","chain","non-chain","nyc chain","non-chain","non-chain","non-chain","non-chain","non-chain","non-chain","non-chain","chain","non-chain","nyc chain","chain","nyc chain","non-chain","non-chain","non-chain","unknown","non-chain","non-chain","non-chain","nyc chain","unknown","nyc chain","non-chain","unknown","non-chain","non-chain","non-chain","non-chain","non-chain","non-chain","non-chain","chain","non-chain","unknown","non-chain","non-chain","non-chain","chain","nyc chain","chain","non-chain","non-chain","chain","non-chain","chain","non-chain","nyc chain","non-chain","non-chain","non-chain","non-chain","non-chain","non-chain","nyc chain","non-chain","non-chain","non-chain","non-chain","non-chain","non-chain","chain","non-chain","non-chain","non-chain","non-chain","non-chain","non-chain","non-chain","non-chain","non-chain","non-chain","non-chain","non-chain","non-chain","non-chain","non-chain","non-chain","nyc chain","non-chain","nyc chain","non-chain","non-chain","nyc chain","non-chain","non-chain","nyc chain","non-chain","non-chain","non-chain","non-chain","non-chain","non-chain","non-chain","non-chain","non-chain","non-chain","non-chain","non-chain","non-chain","non-chain","non-chain","non-chain","non-chain","non-chain","non-chain","non-chain","unknown","non-chain","non-chain","nyc chain","non-chain","non-chain","non-chain","non-chain","non-chain","non-chain","non-chain","non-chain","unknown","non-chain","chain","non-chain","non-chain","nyc chain","non-chain","nyc chain","non-chain","non-chain","non-chain","non-chain","nyc chain","non-chain","non-chain","chain","non-chain","non-chain","non-chain","non-chain","non-chain","non-chain"];
    for (var b=0; b<restaurants.length; b++){
        dict[restaurants[b]] = chain[b];
    }
    for (var i=0; i<trs.length; i++)
    {
        tds = trs[i].getElementsByTagName("TD");
        for(var h = 0; h<tds.length;h++){
            if(dict[tds[h].innerHTML]=="non-chain"){
                tds[h].style.backgroundColor = "#a4c2f4";
                tds[h].style.color = "#a4c2f4";
            }
            if(dict[tds[h].innerHTML]=="chain"){
                tds[h].style.backgroundColor = "#FFA18E";
                tds[h].style.color = "#FFA18E";
            }
            if(dict[tds[h].innerHTML]=="nyc chain"){
                tds[h].style.backgroundColor = "#FFE29A";
                tds[h].style.color = "#FFE29A";
            }
            if(dict[tds[h].innerHTML]!="nyc chain"&&dict[tds[h].innerHTML]!="non-chain"&&dict[tds[h].innerHTML]!="chain"&&tds[h].title!="none"){
                tds[h].style.backgroundColor = "#DABEFF";
                tds[h].style.color = "#DABEFF";
            }
            tds[h].innerHTML= "&nbsp;";
        }
    }
}

    
    tabulate(dataAm, ["2008", "2009","2010","2011","2012","2013","2014","2015","2016","2017","2018","2019","2020","2021"],"amsterdam");
    recolor(0);
    tabulate(dataBr, ["2008", "2009","2010","2011","2012","2013","2014","2015","2016","2017","2018","2019","2020","2021"],"broadway");
    recolor(1);
    tabulate(dataCo, ["2008", "2009","2010","2011","2012","2013","2014","2015","2016","2017","2018","2019","2020","2021"],"rest");
    recolor(2);
