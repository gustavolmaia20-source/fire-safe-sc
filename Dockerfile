FROM node:20-alpine AS builder

WORKDIR /app

# Copia manifestos e instala dependências.
# Usamos `npm install` (em vez de `npm ci`) para tolerar divergências
# de package-lock causadas por edições no ambiente Lovable.
COPY package.json package-lock.json* ./
RUN npm install --no-audit --no-fund

COPY . .

# Build de produção — vite.config.ts aplica base "/previncendio/" quando mode=production
RUN npm run build

FROM nginx:alpine

COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
