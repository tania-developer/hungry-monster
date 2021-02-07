// const searchBtn = document.getElementById('button-addon2');
// searchBtn.addEventListener('click', () => {
//     const searchLetter = document.getElementById('search').value;
//     getValue(searchLetter);
// });




document.getElementById('button-addon2').addEventListener("click",function(){
        const searchValue = document.getElementById('search').value;
        
        const url = `https://www.themealdb.com/api/json/v1/1/search.php?f=${searchValue}`
        fetch(url)
            .then(res => res.json())
            .then(data => showMeal(data)); 
            //     const mealName = data.meals[0];
            //     console.log(mealName);
            });
    //  });

     const showMeal = data => {
         const array = data.meals;
         for (let i = 0; i < array.length; i++) {
             const meal = array[i];
             
             console.log(meal);
             
         }
     }



// const url = `https://www.themealdb.com/api/json/v1/1/search.php?f=${searchLetter}`
// fetch(url)
//     .then(res => res.json())
//     .then(data => console.log(data));

