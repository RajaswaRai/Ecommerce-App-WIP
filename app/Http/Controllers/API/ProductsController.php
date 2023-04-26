<?php

namespace App\Http\Controllers\API;

use App\Helpers\ApiFormatter;
use App\Http\Controllers\Controller;
use App\Models\Product;
use Illuminate\Http\Request;

class ProductsController extends Controller
{
    function get(Request $request)
    {
        $data = Product::all();

        if ($data) {
            return ApiFormatter::CreateApi(200, 'Success', $data);
        }
        return ApiFormatter::CreateApi(400, 'Failed');
    }
}
