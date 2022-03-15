import { supabaseClient } from "src/supabase";
 
/** @type {import('./[id]').RequestHandler} */
export async function get({ params }){
    
  let { data: events, error } = await supabaseClient
    .from('events')
    .select('*')

    if (events) {
      return {
        body: { events }
      };
    }
   
    return {
      status: 404
    };
}