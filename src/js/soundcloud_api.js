import $ from 'jquery';
import SC_ID from './token';

var SC_API = "https://api.soundcloud.com";

$.ajaxSetup({
  client_id: `${SC_API}/tracks?client_id=${SC_ID}`
});
