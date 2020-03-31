
//HTML 
<select id="selectCurrentMonth">
  <option value="1">Jan</option>
  <option value="2">Feb</option>
  <option value="3">Mar</option>
  <option value="4">Apr</option>
  <option value="5">May</option>
  <option value="6">June</option>
  <option value="7">Jul</option>
  <option value="8">Aug</option>
  <option value="9">Sept</option>
  <option value="10">Oct</option>
  <option value="11">Nov</option>
  <option value="12">Dec</option>
</select>
Disable all months in drop down which occurs after the current month

//JS
var month = new Date().getMonth();
$('#selectCurrentMonth option:gt(' + month + ')').prop('disabled', true);
