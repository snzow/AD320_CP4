/*
* Name : Aodhan Bower
* Date : 11/7/2023
* 
* This is the JS file to implement the UI for a website that 
* gives users the option to reverse their text or get a list of books using
* buttons and text input
*/


'use strict';
(function () {
  window.addEventListener('load', init);

  function init() {
    const reverseBox = id('reverseInput')
    const bookButton = document.querySelector('button');
    const searchButton =id('reverseButton');

    bookButton.addEventListener('click', function () {

    });

    searchButton.addEventListener('submit', async () => {
        const reverseBox = document.querySelector('input');
        console.log(reverseBox.value);
        await getReverse(reverseBox.value);
        reverseBox.value = '';
        console.log(reverseBox.value);
       
    });

    

  }

  /**
   * 
   * @param {string} stringToReverse
   */
  async function getReverse(stringToReverse){
    try{
    const response = await fetch(`http://localhost:3000/reverse?input=${wordToReverse}`);
    const reversedWord = await response.text();

    if(!response.ok) {
        throw new Error(`Error: ${data}`);
    }
    

   

    } catch(error){
        
    }
  }

   /**
   * Helper function to return the response's result text if successful, otherwise
   * returns the rejected Promise result with an error status and corresponding text
   * @param {object} res - response to check for success/error
   * @return {object} - valid response if response was successful, otherwise rejected
   *                    Promise result
   */
   async function statusCheck(res) {
    if (!res.ok) {
      throw new Error(await res.text());
    }
    return res;
  }

  /**
   * Returns the element that has the ID attribute with the specified value.
   * @param {string} id - element ID
   * @return {object} DOM object associated with id.
   */
  function id(id) {
    return document.getElementById(id);
  }

  
});
