export default class Data{
  constructor(){
    this.error_messages =
      {
        duplicate_email_message: 'An account using this email address has already been registered. Please enter a valid password or request a new one.',
        authentication_failed_message: 'Authentication failed.'

      }

    this.warning_messages =
    {
      no_search_result_message: 'No results were found for your search'
    }
  }
}
