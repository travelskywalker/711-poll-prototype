@extends('layouts.app')

@section('content')
<form id="cast">
	<div class="row">
		<div class="col s12 center-align">
			<div class="input-field col s12">
	          <input id="school" name="school_name" type="text" class="validate">
	          <label for="school">School Name</label>
	        </div>
		</div>
	</div>
	<div class="row">
		<div class="col s12 center-align">
			<div class="input-field col s12">
	          <input id="barcode" name="barcode" type="text" class="validate">
	          <label for="barcode">Barcode (press enter when done)</label>
	        </div>
		</div>
	</div>
</form>

<!-- <div class="row">
	<div class="cast-area row s12">
	</div>
</div> -->

<div class="row" id="result">
</div>

@endsection