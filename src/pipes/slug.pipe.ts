import {
  ArgumentMetadata,
  BadRequestException,
  Injectable,
  PipeTransform,
} from '@nestjs/common';

@Injectable()
export default class ValidateSlugPipe implements PipeTransform<string, string> {
  transform(value: string, metadata: ArgumentMetadata): string {
    const uuidRegex =
      /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;

    const slugRegex = /^.*-.*\d{2}$/;

    const isUUID = uuidRegex.test(value);

    const isValidSlug =
      value.length <= 7 && value.includes('-') && slugRegex.test(value);

    if (isUUID || isValidSlug) return value;

    throw new BadRequestException('Invalid slug format');
  }
}
