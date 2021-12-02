# INFO6150_final
Journey Memo is a Single-Page Application based on ReactJS that is used to record travel expenses, photos, and view photos posted by other users in the system.

## Preaface
- Use useEffect to simulate the delay processing when loading the webpage. In the offline state, the spinner will rotate for 3 seconds, and then the page will automatically jump to the program homepage.

## Expense(complexUI)
The expense page is used to record all expenses during the trip. Here, the user can complete the record and search of the corresponding expenses during the trip.
- Searching function： the user can enter the expense item containing the keyword through the input box at the top of the page, the page does not need to click other buttons, and the unqualified expense item can be filtered out in real time by monitoring the value change in the search box.
- Adding  function, click the plus sign in the lower right corner of the page to call up the form of new price adjustment items. After entering the legal information, click Add to complete the addition of the item.
  - The plus button in the bottom right corner implements the animation effect. When clicked once, the "plus" will be rotated into a "cross", and click again, the      added form will be collapsed, and the "cross" will be rotated into a "plus" again.
  - The add form has a validation function. All the fields are currently required, and the amount field requires a number with a maximum of two decimal places. When illegal fields appear in the form, the form will not be submitted, and the user will be prompted to enter the fields as required.
- Deleting function: By clicking the cross button after each expense item, the item can be deleted.

## Travel(complexUI)
The travel page is used to record the beautiful moments in the user's travel process. Here the user can add or delete travel cards. The layout of this page is  using grid-columns to ensure that each row of 3 cards can be aligned in length and width
- Adding function: When the user uses the Travel record function for the first time, Travelpage will encourage them to taking down their first travel record. By clicking the Add New button below the horizontal line, the page will pop up an add form covered by a black mask. Here the user needs to enter the path to add the photo, location information and a short description. After all the fields are validated, the travel information can be added to the page. At the same time, the user can also click anywhere on the black mask to abandon this adding and continue other functions.
- Deleting function: the user can click the Delete button below the card to complete the deletion of the Travel card

## Posts
The Posts interface can help users find travel cards shared by other users, and users can choose to like or bookmark the corresponding travel cards. The layout of this page adopts a waterfall flow method, avoiding the description of different lengths to make the cards unable to align

## Privacy
- All icons on the page are from Ali Icon. All icons are available for download and change color and size. Icon copyright belongs to the designer.
- The spinner image on the cover page is from google image. Belongs to Commercial & other licenses.
- All the pictures on the Travel page are taken by myself.
- All the pictures on the Posts page are coming from Pexels. All photos and videos on Pexels can be downloaded and used for free.
