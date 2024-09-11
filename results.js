const memberstack = window.$memberstackDom;
let memberId;

memberstack.getCurrentMember().then(({ data: member }) => {
    if (member) {
        memberId = member.id;
        displayNestedObject(memberId);
    }
});

async function displayNestedObject(memberId) {
    const memberData = await memberstack.getMemberJSON(memberId);
    // Assuming 'results' are directly under the 'data' object based on the JSON structure you've provided.
    const results = memberData.data.results;
    const validValueIds = results.map(result => result.value_ID); // Extract value_IDs from the results

    const collectionItems = document.querySelectorAll('.collection-item'); // Assuming your collection items have the class 'collection-item'
    
    collectionItems.forEach(item => {
        const valueId = item.getAttribute('value_id');
        const result = results.find(result => result.value_ID === valueId);

        if (result) {
            // Update the HTML of the p elements
            item.querySelector('.result-value.refvaluemin').innerHTML = `Reference Min Value: ${result.refValueMin}`;
            item.querySelector('.result-value.refvaluemax').innerHTML = `Reference Max Value: ${result.refValueMax}`;
            item.querySelector('.result-value.uservalue').innerHTML = `User Value: ${result.userValue}`;
            item.style.display = ''; // Ensure item is visible if it was previously hidden
        } else {
            item.style.display = 'none'; // Hide item if no matching value_ID is found
        }
    });
}
