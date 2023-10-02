/**
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

// MODULES //

var tape = require( 'tape' );
var Complex64 = require( '@stdlib/complex-float32' );
var imagf = require( './../../dist' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof imagf, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function returns the imaginary component of a complex number', function test( t ) {
	var im;
	var z;

	z = new Complex64( 3.14, -3.14 );
	im = imagf( z );
	t.strictEqual( im, -3.140000104904175, 'returns expected value' );

	t.end();
});
