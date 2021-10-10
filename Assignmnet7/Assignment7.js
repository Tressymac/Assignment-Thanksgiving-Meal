
const thanksgivingMeal = {
    starter : { 
        fruit: "honeydew melon",
        wine: "moscato",
        calories: 180,
    },

            entree : {
                meat: "Turkey",
                alt: "Stuffed green peppers",
            
                
                vegetables : {
                    potatoes: "Creamed mashed potatoes",
                    greens: "French beans",
                    salad: "Radacchio",
                    },

                        sides : {
                            bread: "garlic bread rolls",
                            pasta: "Macaroni and Cheese",
                            },

                                calories: 450,
            },

                                        dessert : {
                                            ice_cream: "pumpkin-vanilla ice-cream",
                                            cake: "frosted pumpkin pie",
                                            calories: 300,
                                        },


                                                total_cost : 25.0,
                                                senior_discount: .10,

        prettyPrint : function(){
            let menuStr = "Start your meal with " + thanksgivingMeal.starter.fruit +", " + "a glass of " + thanksgivingMeal.starter.wine +". " + "Help yourself to " + thanksgivingMeal.entree.meat + " or " + thanksgivingMeal.entree.alt +", with " + thanksgivingMeal.entree.vegetables.salad +", " + thanksgivingMeal.entree.vegetables.greens +", and " + thanksgivingMeal.entree.vegetables.potatoes +". Have a side! Plenty of " + thanksgivingMeal.entree.sides.bread + "and " + thanksgivingMeal.entree.sides.pasta +". Finish your meal with a sweet - " + thanksgivingMeal.dessert.ice_cream +", and " + thanksgivingMeal.dessert.cake +". ";
            console.log(menuStr)
                let fullMeal1 =  document.querySelector (".fullMeal");
                fullMeal1.innerText = menuStr;  
                    return this[menuStr]
        },


                totalPrice(isSenior) {
                    isSenior = true;
                    let price = 25;
                    if (isSenior)
                        discount =  ` Seniors get a 10% discount, the total cost of your thanksgiving meal? Adults will be $${thanksgivingMeal.total_cost}, and seniors will be $${price - price * .10 }.`
                            final =  document.querySelector (".priceInfo");
                            final.innerText = discount;
                            return this[price]
                },


                        totalCalories : function() {
                            return(this.starter.calories + this.entree.calories + this.dessert.calories);   
                        },


                                caloriesFrom: function(indicator) {
                                    indicator =  `Worried about calories? Total damage is ${thanksgivingMeal.totalCalories()}. (Starter is ${this.starter.calories}, Entree is ${this.entree.calories}, and Dessert is ${ this.dessert.calories}.)`;   
                                        let cal =  document.querySelector (".calorieInfo");
                                        cal.innerText = indicator;  
                                            return this[indicator];
                                } 



};


console.log(thanksgivingMeal.prettyPrint());
console.log(thanksgivingMeal.totalPrice());
console.log(thanksgivingMeal.totalCalories());
console.log(thanksgivingMeal.caloriesFrom());



