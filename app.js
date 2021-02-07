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
            });


     const showMeal = data => {
         const containerDiv = document.getElementById('meal-container');
         const array = data.meals;
         for (let i = 0; i < array.length; i++) {
             const meal = array[i];
             const mealName = meal.strMeal;
             const img = meal.strMealThumb;

             const mealDiv = document.createElement('div');
             mealDiv.className = ('single-meal')
             const mealDivInfo = `
             <img src="${img}" alt="">
             <h5>${mealName}</h5>`
             mealDiv.innerHTML=mealDivInfo;
             containerDiv.appendChild(mealDiv);
             console.log(mealName,img);
             
         }
     }



// const url = `https://www.themealdb.com/api/json/v1/1/search.php?f=${searchLetter}`
// fetch(url)
//     .then(res => res.json())
//     .then(data => console.log(data));

