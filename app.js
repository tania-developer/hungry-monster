
document.getElementById('button-addon2').addEventListener("click",function(){
        const searchValue = document.getElementById('search').value;       
        const url = `https://www.themealdb.com/api/json/v1/1/search.php?f=${searchValue}`
        fetch(url)
            .then(res => res.json())
            .then(data => showMeal(data))
            .catch(error => displayError("Oops something went wrong. Try again and search by your favorite food's first letter"));
            });


const displayError = error => {
    const errorTag = document.getElementById('error-msg');
    errorTag.innerText = error;
}

     const showMeal = data => {
         const containerDiv = document.getElementById('meal-container');
         const array = data.meals;
         containerDiv.innerHTML = '';

         const  mealInfoDiv= document.getElementById('meal-info');
         mealInfoDiv.innerHTML = '';
         
         const errorTag = document.getElementById('error-msg');
         errorTag.innerText = '';

         array.forEach(meal => {
            const mealDiv = document.createElement('div');
            mealDiv.className = ('single-meal')
            const mealDivInfo = `
            <img onclick = "displayMealName('${meal.strMeal}')" class = "image" src="${meal.strMealThumb}" alt="">
            <h5 class='name'>${meal.strMeal}</h5>`
            mealDiv.innerHTML=mealDivInfo;
            containerDiv.appendChild(mealDiv);
         });
        }

 const displayMealName = name => {
     const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`
     fetch(url)
        .then(res => res.json())
        .then(data => mealInfo(data));
 }

 const mealInfo = meal => {
     const array = meal.meals;
     const errorTag = document.getElementById('error-msg');
     errorTag.innerText = '';
     array.forEach(meal => {

        const  mealInfoDiv= document.getElementById('meal-info');
        mealInfoDiv.innerHTML = `
        <img src="${meal.strMealThumb}" alt="">
        <h2 >${meal.strMeal}</h2>
        <h5> ingredients</h5>
        <p><i class="fas fa-check-square color"></i>${meal.strIngredient1}</P>
        <p><i class="fas fa-check-square color"></i>${meal.strIngredient2}</P>
        <p><i class="fas fa-check-square color"></i>${meal.strIngredient3}</P>
        <p><i class="fas fa-check-square color"></i>${meal.strIngredient4}</P>
        <p><i class="fas fa-check-square color"></i>${meal.strIngredient5}</P>
       
        `
     });
     
 }
        