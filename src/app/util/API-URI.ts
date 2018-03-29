export class APIURI {
    public static SERVER_URL: string = "http://localhost:8080";
    public static GET_TODOLIST: string = APIURI.SERVER_URL+"/todos";
    public static ADD_TODO: string = APIURI.SERVER_URL+"/savetodo";
    public static DELETE_TODO: string = APIURI.SERVER_URL+"/deletetodo";
    public static UPDATE_TODO: string = APIURI.SERVER_URL+"/updatetodo";

}