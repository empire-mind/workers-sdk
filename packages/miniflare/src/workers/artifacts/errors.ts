// Shared by the namespace service and the wrapped binding in the caller isolate.
export type ArtifactsErrorCode =
	| "ALREADY_EXISTS"
	| "NOT_FOUND"
	| "INVALID_INPUT"
	| "INVALID_REPO_NAME"
	| "INVALID_TTL"
	| "INVALID_URL"
	| "REMOTE_AUTH_REQUIRED"
	| "MEMORY_LIMIT"
	| "UPSTREAM_UNAVAILABLE"
	| "INTERNAL_ERROR";

const numericCodes: Record<ArtifactsErrorCode, number> = {
	INVALID_INPUT: 10100,
	INVALID_REPO_NAME: 10101,
	INVALID_TTL: 10103,
	INVALID_URL: 10104,
	REMOTE_AUTH_REQUIRED: 10106,
	NOT_FOUND: 10200,
	ALREADY_EXISTS: 10201,
	INTERNAL_ERROR: 10400,
	UPSTREAM_UNAVAILABLE: 10401,
	MEMORY_LIMIT: 10402,
};

export class ArtifactsError extends Error {
	readonly code: ArtifactsErrorCode;
	readonly numericCode: number;

	constructor(code: ArtifactsErrorCode, message: string) {
		super(message);
		this.name = "ArtifactsError";
		this.code = code;
		this.numericCode = numericCodes[code];
	}
}
