FROM mcr.microsoft.com/dotnet/core/aspnet:3.0-buster-slim AS base
WORKDIR /app
EXPOSE 80

FROM mcr.microsoft.com/dotnet/core/sdk:3.0-buster AS build
WORKDIR /src
COPY ["MOD_AuthenticationService/MOD_AuthenticationService.csproj", "MOD_AuthenticationService/"]
RUN dotnet restore "MOD_AuthenticationService/MOD_AuthenticationService.csproj"
COPY . .
WORKDIR "/src/MOD_AuthenticationService"
RUN dotnet build "MOD_AuthenticationService.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "MOD_AuthenticationService.csproj" -c Release -o /app/publish

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "MOD_AuthenticationService.dll"]