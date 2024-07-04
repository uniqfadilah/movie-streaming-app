import { useQuery } from "@tanstack/react-query";
import { getDiscovery, getMovieSearch, getNowPlaying, getPopular, getTopRated, getUpComming } from "../services";

export const useQuerygetDiscovery = () => useQuery({
    queryKey : ["useQuerygetDiscovery"],
    queryFn : getDiscovery
})
export const useQuerygetPopular = () => useQuery({
    queryKey : ["useQuerygetPopular"],
    queryFn : getPopular
})
export const useQuerygetNowPlaying = () => useQuery({
    queryKey : ["useQuerygetPopular"],
    queryFn : getNowPlaying
})
export const useQuerygetUpComming = () => useQuery({
    queryKey : ["useQuerygetUpComming"],
    queryFn : getUpComming
})
export const useQuerygetTopRated = () => useQuery({
    queryKey : ["useQuerygetTopRated"],
    queryFn : getTopRated
})
export const useQuerygetMovieSearch = (query:any) => useQuery({
    queryKey : ["useQuerygetMovieSearch", query],
    enabled : !!query,
    queryFn : () => getMovieSearch({query})
})