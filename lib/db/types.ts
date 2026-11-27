/**
 * Contratos mínimos da DAL. O cliente real é um PrismaClient; aqui mantemos
 * apenas a superfície usada pela camada de dados para que os testes possam
 * substituí-lo por um fake sem banco.
 */

export interface RawQueryExecutor {
  $queryRaw<T = unknown>(
    strings: TemplateStringsArray,
    ...values: readonly unknown[]
  ): Promise<T>;
}

export interface SimpleDelegate {
  findFirst(args: { where: Record<string, unknown> }): Promise<unknown>;
  findMany(args?: { where?: Record<string, unknown> }): Promise<unknown[]>;
  create(args: { data: Record<string, unknown> }): Promise<unknown>;
  upsert(args: {
    where: Record<string, unknown>;
    create: Record<string, unknown>;
    update: Record<string, unknown>;
  }): Promise<unknown>;
  count(args?: { where?: Record<string, unknown> }): Promise<number>;
}

export interface AuthCredentialDelegate extends SimpleDelegate {
  findUnique(args: {
    where: { email: string };
  }): Promise<unknown | null>;
}

/** Superfície usada apenas na resolução da credencial, antes da sessão. */
export interface AuthDbClient extends RawQueryExecutor {
  authCredential: AuthCredentialDelegate;
}

export interface TenantDbClient extends RawQueryExecutor {
  $transaction<T>(
    fn: (tx: TenantDbClient) => Promise<T>,
  ): Promise<T>;
  tenant: SimpleDelegate;
  user: SimpleDelegate;
  tenantMembership: SimpleDelegate;
  participantIdentity: SimpleDelegate;
  instrumentVersion: SimpleDelegate;
  itemBankVersion: SimpleDelegate;
  scoringVersion: SimpleDelegate;
  sequenceVersion: SimpleDelegate;
  goldenDatasetVersion: SimpleDelegate;
  run: SimpleDelegate;
  responseRaw: SimpleDelegate;
  responseEvent: SimpleDelegate;
  derivedScoreRun: SimpleDelegate;
  derivedScoreValue: SimpleDelegate;
  changeLog: SimpleDelegate;
  occurrence: SimpleDelegate;
  auditLog: SimpleDelegate;
}

/** Adapta o PrismaClient real sem expor detalhes de implementação. */
export function asTenantDbClient(client: unknown): TenantDbClient {
  return client as TenantDbClient;
}
