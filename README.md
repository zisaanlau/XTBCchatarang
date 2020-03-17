# Chatarang

## Potential future enhancements

* Client-side form validation (_e.g._ required fields)
* Prevent the creation of a room that already exists
* Delete the messages when a room is deleted
* Include emojis in message body
* Upload images
* Multiple organizations
* Show a room's members
* Show who is logged in
* Indicate when someone is typing
* Make it mobile-friendly!

## Day 11

See how far you can get implementing emoji reactions.

## Day 10 

Only list public rooms, and rooms in which the current user is listed as a member.


Make a separate UI for direct messages.

* List them separately in the sidebar.
* Make a new form (or at least a new button that presents the same form differently).

## Day 9 

Move the list of rooms in state to `Main`, and be sure that the description updates appropriately when changing rooms.

## Day 8

Add another authentication method (or two?). Remember, [documentation](https://firebase.google.com/docs/auth/web/manage-users#get_the_currently_signed_in_user) is your friend.


### Super Mega Bonus Credit Hyper Fighting

Have a great weekend!

## Day 7 

Add support for multiple rooms/channels! _Hint_: The first argument (`endpoint`) to `base.syncState` should be different for each room/channel.

Use Firebase authentication when signing in users. _Hint_: Google authentication is the easiest method.


## Day 6 

Create and style more components, based on the `chat-static` content. There should be approximately one CSS file per component.

### note

* Make a `SignIn` component with a form that takes a user name.
* When the form is submitted, save that user in the `state` of the `App` component.
* When `state.user` is not set, show the `SignIn` component.
* When `state.user` is set, show the `Main` component.
