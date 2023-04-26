<?php

namespace App\Helpers;

class ApiFormatter
{
    protected static $reponse = [
        'status' => null,
        'message' => null,
        'data' => null
    ];

    public static function CreateApi($status = null, $message = null, $data = null)
    {
        self::$reponse['status'] = $status;
        self::$reponse['message'] = $message;
        self::$reponse['data'] = $data;

        return response()->json(self::$reponse, self::$reponse['status']);
    }
}
