<?php

namespace App\Http\Middleware;

use Closure;
use Auth;

class visitorMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        //sazid
        if(Auth::check() && Auth::user()->role->id==3){
            return $next($request);
           }else{
            return redirect()->route('login');
           }
    }
}
