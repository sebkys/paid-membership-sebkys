# paid-membership-sebkys
Demo site to pay a paid membership, written with vanilla javascript using basic logic and implementing Switch, Try Catch and Finally Classes.

# flow
- User fill amount on the text box input provided
- User choose subscription duration on the combo box provided
- Checking transaction alert appeared
- if amount input greater than amount needed, then change will appear
- if amount input lower than amount needed, then amount needed to pay appear

# implementation code
- TRY statement will validate input from text box with 4 condition provided : input lower than 0, input empty, input isn't a number and input lower than 25, then throw an Error when the condition met.
- CATCH statement run when TRY statement throw an Error.
- SWITCH statement run when the input doesn't meet the condition provided then checking the condition based on the combo box value provided.
- IF statement run on each CASE to check the input is greater than amount needed or not, if the condition met then update the value of variable change and success. If the condition doesn't met then update the value of variables min.
- FINALLY statement will run even if the condition provided by TRY statement met or not and throw an alert 

# resources 
- Demo : https://switch-try-catch-finally-sebkys.netlify.app
- Stackup : https://app.stackup.dev/
