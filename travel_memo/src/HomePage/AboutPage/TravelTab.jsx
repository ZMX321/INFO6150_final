

function TravelTab() {
    return <div className="tabs_content">
        <div className="tab_content">
            <p className="intro_travel">The travel page is used to record the beautiful moments in the user's travel process. Here the user can add or delete travel cards. The layout of this page is using grid-columns to ensure that each row of 3 cards can be aligned in length and width.
            </p>
            <ul className="travel_fea">
                <li>
                    Adding function: When the user uses the Travel record function for the first time, Travelpage will encourage them to taking down their first travel record. By clicking the Add New button below the horizontal line, the page will pop up an add form covered by a black mask. Here the user needs to enter the path to add the photo, location information and a short description. After all the fields are validated, the travel information can be added to the page. At the same time, the user can also click anywhere on the black mask to abandon this adding and continue other functions.
                </li>
                <li>Deleting function: the user can click the Delete button below the card to complete the deletion of the Travel card</li>
            </ul>
        </div>
    </div>
}

export default TravelTab;