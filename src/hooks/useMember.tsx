import type { Member } from "../types/data";
import type { DataResponse, Response } from "../types/response";
import type { FilterMembers } from "../types/filters";
import { useMemo } from "react";

const url = import.meta.env.VITE_API_URL;

const useMember = () => {
  const getMembers = (
    filters: FilterMembers
  ): Response<DataResponse<Member>> => {
    let response: Response<DataResponse<Member>> = {
      data: {
        data: [],
        hasNextPage: false,
        hasPreviousPage: false,
        page: 0,
        pageSize: 0,
        totalCount: 0,
        totalPages: 0,
      },
      message: "",
      success: false,
      timestamp: "",
      traceId: "",
    };

    fetch(`${url}/api/Miembros?${buildQueryParams(filters)}`, {
      method: "GET",
      headers: {
        "Access-Control-Allow-Origin": "https://localhost:7170/",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        response = data;
      })
      .catch((error) => {
        console.error("Error al obtener los miembros:", error);
      });
    return response;
  };

  const getMember = (id: number): Response<DataResponse<Member>> => {
    let response: Response<DataResponse<Member>> = {
      data: {
        data: [],
        hasNextPage: false,
        hasPreviousPage: false,
        page: 0,
        pageSize: 0,
        totalCount: 0,
        totalPages: 0,
      },
      message: "",
      success: false,
      timestamp: "",
      traceId: "",
    };

    fetch(`${url}/api/Miembros/${id}`, {
      method: "GET",
      headers: {},
    })
      .then((res) => res.json())
      .then((data) => {
        response = data;
      })
      .catch((error) => {
        console.error("Error al obtener el miembro:", error);
      });
    return response;
  };

  const createMember = (member: Member): string => {
    let response: Response<DataResponse<Member>> = {
      data: {
        data: [],
        hasNextPage: false,
        hasPreviousPage: false,
        page: 0,
        pageSize: 0,
        totalCount: 0,
        totalPages: 0,
      },
      message: "",
      success: false,
      timestamp: "",
      traceId: "",
    };

    fetch(`${url}/api/Miembros`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(member),
    })
      .then((res) => res.json())
      .then((data) => {
        response = data;
      })
      .catch((error) => {
        console.error("Error al crear el miembro:", error);
      });

    return response.success
      ? "Miembro creado exitosamente"
      : "Error al crear el miembro";
  };

  const updateMember = (member: Member): string => {
    let response: Response<DataResponse<Member>> = {
      data: {
        data: [],
        hasNextPage: false,
        hasPreviousPage: false,
        page: 0,
        pageSize: 0,
        totalCount: 0,
        totalPages: 0,
      },
      message: "",
      success: false,
      timestamp: "",
      traceId: "",
    };
    const id = member.id;
    // create a dto without the id property (avoid mutating the input)
    const { id: _removed, ...dto } = member as any;
    const body = {
      id,
      dto,
    };

    fetch(`${url}/api/Miembros/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    })
      .then((res) => res.json())
      .then((data) => {
        response = data;
      })
      .catch((error) => {
        console.error("Error al actualizar el miembro:", error);
      });

    return response.success
      ? "Miembro actualizado exitosamente"
      : "Error al actualizar el miembro";
  };

  function buildQueryParams(params: FilterMembers): string {
    const query = new URLSearchParams();
    for (const key in params) {
      const value = params[key as keyof FilterMembers];
      if (value !== undefined) {
        query.append(key, String(value));
      }
    }
    return query.toString();
  }

  useMemo(() => {}, []);

  return { getMembers, getMember, createMember, updateMember };
};

export default useMember;
